import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function handler(req, res) {
  const { method, body, query } = req;

  const getData = async () => {
    const myList = await prisma.list_table.findMany({
      where: {
        user_id: Number(query.id),
      },
    });
    // console.log(myList)
    res.json(myList);
  };

  switch (method) {
    case "GET":
      getData();
      break;
    default:
      return;
  }
}

export default handler;
