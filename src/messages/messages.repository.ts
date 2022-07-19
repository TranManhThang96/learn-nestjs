import { readFile, writeFile } from 'fs/promises';

export class MessageRepository {
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);

    return messages[id];
  }

  async findAll() {
    const content = await readFile('messages.json', 'utf8');
    return JSON.parse(content);
  }

  async create(message: string) {
    const content = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(content);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content: message };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
