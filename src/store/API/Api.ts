// api.ts


// Определите интерфейс для проекта (подставьте фактические поля вашего API)
export interface Project {
  id: number;
  title: string;
  description: string;
  owner: string;
  // Другие поля
}
// api.ts
export interface IGetPostList {
  status: 'success';
  request_id: string;
  result: {
    projects: {
      projects: Project[]; // Используйте интерфейс, описывающий структуру проекта
      users: User[]; // Используйте интерфейс, описывающий структуру пользователя
      selected_bids: Bid[]; // Используйте интерфейс, описывающий структуру выбранных ставок
      total_count: number;
    };
    contests: {
      contests: Contest[]; // Используйте интерфейс, описывающий структуру конкурса
      users: User[]; // Используйте интерфейс, описывающий структуру пользователя
      awarded_entries: Entry[]; // Используйте интерфейс, описывающий структуру награжденных записей
      total_count: number;
    };
    total_count: number;
  };
}


interface User {
  // Определите поля, описывающие структуру пользователя
  id: number;
  username: string;
  // Другие поля
}

interface Bid {
  // Определите поля, описывающие структуру ставки
  id: number;
  // Другие поля
}

interface Contest {
  // Определите поля, описывающие структуру конкурса
  id: number;
  title: string;
  // Другие поля
}

interface Entry {
  // Определите поля, описывающие структуру награжденной записи
  id: number;
  // Другие поля
}
