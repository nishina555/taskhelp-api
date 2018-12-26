import { Task } from '../domain/models/Task'
import pool from '../interfaces/database/DbConnection'

export class CreateTask {
  private _taskRepository: any

  constructor(taskRepository: any) {
    this._taskRepository = taskRepository
  }

  execute(title: string, description: string) {
    let task = new Task(title, description)
    return this._taskRepository.persist(task)
  }
}
