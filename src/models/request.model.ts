import {Entity, model, property} from '@loopback/repository';

@model()
export class Request extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  user_id: string;

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  skills_required: string[];

  @property({
    type: 'string',
    required: true,
  })
  requested_time: string;

  @property({
    type: 'string',
    required: true,
  })
  requested_date: string;


  constructor(data?: Partial<Request>) {
    super(data);
  }
}

export interface RequestRelations {
  // describe navigational properties here
}

export type RequestWithRelations = Request & RequestRelations;
