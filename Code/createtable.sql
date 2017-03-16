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
ClassID int,
UserID int,
NotificationFlag int
);


create table Class
(
ClassID int,
ClassNumber int,
ClassName varchar(255)
);

create table Handout
(
HandoutID int,
ClassID int,
HandoutKey varchar(255)
);


create table Question
(
QuestionID int,
ClassID int,
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
ClassID int,
FeedbackText varchar(255),
FeedbackRating double,
DateOfFeedback datetime
);

create table Instructor
(
InstructorID int,
UserID int,
ClassID int
);