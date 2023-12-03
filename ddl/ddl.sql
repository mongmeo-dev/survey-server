create type item_status as enum ('YET', 'IN_USE', 'DELETE');

create table surveys
(
    id         bigserial primary key,
    title      varchar(100) not null,
    status     item_status  not null,
    created_at timestamp    not null,
    updated_at timestamp    not null,
    deleted_at timestamp    null
);

create index surveys_status_index on surveys (status);

create table questions
(
    id         bigserial primary key,
    survey_id  bigint       not null, /* Reference constraint 를 걸지 않는다. 애플리케이션에서 무결성 보장 */
    question   varchar(100) not null,
    status     item_status  not null,
    created_at timestamp    not null,
    updated_at timestamp    not null,
    deleted_at timestamp    null
);

create index questions_status_index on questions (status);
create index questions_survey_id_index on questions (survey_id);

create table question_choices
(
    id          bigserial primary key,
    question_id bigint       not null, /* Reference constraint 를 걸지 않는다. 애플리케이션에서 무결성 보장 */
    value       varchar(100) not null,
    score       int          not null,
    status      item_status  not null,
    created_at  timestamp    not null,
    updated_at  timestamp    not null,
    deleted_at  timestamp    null
);

create index question_choices_status_index on question_choices (status);
create index question_choices_question_id_index on question_choices (question_id);

create table survey_answers
(
    id         bigserial primary key,
    survey_id  bigint      not null, /* Reference constraint 를 걸지 않는다. 애플리케이션에서 무결성 보장 */
    status     item_status not null,
    created_at timestamp   not null,
    updated_at timestamp   not null,
    deleted_at timestamp   null
);

create index survey_answers_status_index on survey_answers (status);
create index survey_answers_survey_id_index on survey_answers (survey_id);

create table question_answers
(
    id               bigserial primary key,
    survey_answer_id bigint      not null, /* Reference constraint 를 걸지 않는다. 애플리케이션에서 무결성 보장 */
    choice_id        bigint      not null,
    status           item_status not null,
    created_at       timestamp   not null,
    updated_at       timestamp   not null,
    deleted_at       timestamp   null
);

create index question_answers_status_index on question_answers (status);
create index question_answers_survey_id_index on question_answers (survey_answer_id);