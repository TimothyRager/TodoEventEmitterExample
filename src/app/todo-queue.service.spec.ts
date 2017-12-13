import { TestBed, inject } from '@angular/core/testing';

import { TodoQueueService } from './todo-queue.service';

describe('TodoQueueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoQueueService]
    });
  });

  it('should be created', inject([TodoQueueService], (service: TodoQueueService) => {
    expect(service).toBeTruthy();
  }));
});
