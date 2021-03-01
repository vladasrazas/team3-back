import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {strict: false},
  name: 'requests',
  plural: 'requests',
  options: {
    mongodb: {
      collection: 'requests',
    },
  },
})
export class RequestModel extends Entity {

  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  user_id: string;

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

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'boolean',
    required: false
  })
  is_open: boolean;

  @property({
    type: 'boolean',
    required: false
  })
  is_matched: boolean;

  constructor(data?: Partial<RequestModel>) {
    super(data);
  }
}

export interface RequestModelRelations {
  // describe navigational properties here
}

export type RequestModelWithRelations = RequestModel & RequestModelRelations;
