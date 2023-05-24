export class OrdersMockService {
  test() {
    console.log('OrdersMockService');
    return {
      user_id: 'test',
      total_value: '30000',
    };
  }
}
