import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { User } from './user';

// 使用 @EventSubscriber 装饰器注册订阅者
@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  // 指定监听的实体
  listenTo() {
    return User;
  }

  // 在插入之前触发
  beforeInsert(event: InsertEvent<User>) {
    console.log('beforeInsert', event.entity);
  }
}
