import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SurveyAnswerEntity } from './survey-answer.entity';
import { QuestionChoiceEntity } from './question-choice.entity';
import { JoinColumn } from 'typeorm/browser';
import { EntityCommonFields } from '../../common/entity/entity-common.fields';

@Entity('question_answers')
export class QuestionAnswerEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @ManyToOne(() => SurveyAnswerEntity, { nullable: false })
  @JoinColumn({ name: 'survey_answer_id' })
  surveyAnswer: SurveyAnswerEntity;
  @ManyToOne(() => QuestionChoiceEntity, { nullable: false })
  @JoinColumn({ name: 'choice_id' })
  choice: QuestionChoiceEntity;
  @Column(() => EntityCommonFields)
  commonFields: EntityCommonFields;
}