create table User
(
UserID int,
Username varchar(255),
password varchar(255),
email varchar(255),
userAnsweredQuestions int
);

create table DashboardItem
(
DashboardItemID int,
CourseID int,
UserID int,
NotificationFlag int
);


create table Course
(
CourseID int,
CourseNumber varchar(255),
CourseName varchar(255)
);

create table Handout
(
HandoutID int,
CourseID int,
HandoutKey varchar(255)
);


create table Question
(
QuestionID int,
CourseID int,
QuestionText varchar(255),
DateOfQuestion datetime,
QuestionRating double,
AnswerID int
);

create table Answer
(
AnswerID int,
AnswerText varchar(255),
DateOfAnswer datetime,
AnswerRating double
);

create table Feedback
(
FeedbackID int,
CourseID int,
FeedbackText varchar(255),
FeedbackRating double,
DateOfFeedback datetime
);

create table Instructor
(
InstructorID int,
UserID int,
CourseID int
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