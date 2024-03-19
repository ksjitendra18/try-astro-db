import { defineDb, defineTable, column } from "astro:db";

const users = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text({ unique: true }),
  },
});

export default defineDb({
  tables: { users },
});
