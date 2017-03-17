create table User
(
UserID int NOT NULL AUTO_INCREMENT,
Username varchar(255),
password varchar(255),
email varchar(255),
userAnsweredQuestions int,
PRIMARY KEY (UserID)
);

create table DashboardItem
(
DashboardItemID int NOT NULL AUTO_INCREMENT,
CourseID int,
UserID int,
NotificationFlag int,
PRIMARY KEY (DashboardItemID)
);


create table Course
(
CourseID int NOT NULL AUTO_INCREMENT,
CourseNumber varchar(255),
CourseName varchar(255),
PRIMARY KEY (CourseID)
);

create table Handout
(
HandoutID int NOT NULL AUTO_INCREMENT,
CourseID int,
HandoutKey varchar(255),
PRIMARY KEY (Handout)
);


create table Question
(
QuestionID int NOT NULL AUTO_INCREMENT,
CourseID int,
QuestionText varchar(255),
DateOfQuestion datetime,
QuestionRating double,
AnswerID int,
PRIMARY KEY (QuestionID)
);

create table Answer
(
AnswerID int NOT NULL AUTO_INCREMENT,
AnswerText varchar(255),
DateOfAnswer datetime,
AnswerRating double,
PRIMARY KEY (AnswerID)
);

create table Feedback
(
FeedbackID int NOT NULL AUTO_INCREMENT,
CourseID int,
FeedbackText varchar(255),
FeedbackRating double,
DateOfFeedback datetime,
PRIMARY KEY (FeedbackID)
);

create table Instructor
(
InstructorID int NOT NULL AUTO_INCREMENT,
UserID int,
CourseID int,
PRIMARY KEY (InstructorID)
);

ALTER TABLE DashboardItem
ADD FOREIGN KEY (CourseID) REFERENCES Course(CourseID);
ALTER TABLE DashboardItem
ADD FOREIGN KEY (UserID) REFERENCES User(UserID);
ALTER TABLE Feedback
ADD FOREIGN KEY (CourseID) REFERENCES Course(CourseID);
ALTER TABLE Handout
ADD FOREIGN KEY (CourseID) REFERENCES Course(CourseID);
ALTER TABLE DashboardItem
ADD FOREIGN KEY (CourseID) REFERENCES Course(CourseID);
ALTER TABLE Instructor
ADD FOREIGN KEY (CourseID) REFERENCES Course(CourseID);
ALTER TABLE Instructor
ADD FOREIGN KEY (UserID) REFERENCES User(UserID);
ALTER TABLE Question
ADD FOREIGN KEY (CourseID) REFERENCES Course(CourseID);
ALTER TABLE Question
ADD FOREIGN KEY (UserID) REFERENCES User(UserID);
ALTER TABLE Question
ADD FOREIGN KEY (AnswerID) REFERENCES Answer(AnswerID);