import fastify from "fastify";
import { request } from "http";
import cors from "@fastify/cors";

const drivers = [
    {
      "id": 1,
      "nome": "Lewis Hamilton",
      "nacionalidade": "Britânico",
      "time": "Mercedes"
    },
    {
      "id": 2,
      "nome": "Max Verstappen",
      "nacionalidade": "Neerlandês",
      "time": "Red Bull Racing"
    },
    {
      "id": 3,
      "nome": "Charles Leclerc",
      "nacionalidade": "Monegasco",
      "time": "Ferrari"
    },
    {
      "id": 4,
      "nome": "Sergio Pérez",
      "nacionalidade": "Mexicano",
      "time": "Red Bull Racing"
    },
    {
      "id": 5,
      "nome": "Sebastian Vettel",
      "nacionalidade": "Alemão",
      "time": "Aston Martin"
    },
    {
      "id": 6,
      "nome": "Valtteri Bottas",
      "nacionalidade": "Finlandês",
      "time": "Alfa Romeo"
    },
    {
      "id": 7,
      "nome": "Lando Norris",
      "nacionalidade": "Britânico",
      "time": "McLaren"
    },
    {
      "id": 8,
      "nome": "Daniel Ricciardo",
      "nacionalidade": "Australiano",
      "time": "McLaren"
    },
    {
      "id": 9,
      "nome": "Carlos Sainz",
      "nacionalidade": "Espanhol",
      "time": "Ferrari"
    },
    {
      "id": 10,
      "nome": "Fernando Alonso",
      "nacionalidade": "Espanhol",
      "time": "Aston Martin"
    },
    {
      "id": 11,
      "nome": "Esteban Ocon",
      "nacionalidade": "Francês",
      "time": "Alpine"
    },
    {
      "id": 12,
      "nome": "Pierre Gasly",
      "nacionalidade": "Francês",
      "time": "Alpine"
    },
    {
      "id": 13,
      "nome": "Lance Stroll",
      "nacionalidade": "Canadense",
      "time": "Aston Martin"
    },
    {
      "id": 14,
      "nome": "Nicholas Latifi",
      "nacionalidade": "Canadense",
      "time": "Williams"
    },
    {
      "id": 15,
      "nome": "Mick Schumacher",
      "nacionalidade": "Alemão",
      "time": "Haas"
    }
  ]
  
    

const teams =  [
    {
      "nome": "Mercedes",
      "país": "Alemanha",
      "fundação": 1954
    },
    {
      "nome": "Red Bull Racing",
      "país": "Áustria",
      "fundação": 2005
    },
    {
      "nome": "Ferrari",
      "país": "Itália",
      "fundação": 1929
    },
    {
      "nome": "Aston Martin",
      "país": "Reino Unido",
      "fundação": 2009
    },
    {
      "nome": "Alpine",
      "país": "França",
      "fundação": 2021
    },
    {
      "nome": "McLaren",
      "país": "Reino Unido",
      "fundação": 1963
    },
    {
      "nome": "Alfa Romeo",
      "país": "Suíça",
      "fundação": 2019
    },
    {
      "nome": "AlphaTauri",
      "país": "Áustria",
      "fundação": 2006
    }
  ]

const server = fastify({logger: true});

server.get("/teams", async (request, response) =>{
    response.type("application/json").code(200)
    return teams
})

server.register(cors, {
    origin: "*",
    methods: ["GET"]
})

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200)
    return drivers
})

interface DriverParams{
    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async(request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver){
        response.type("application/json").code(404);

        return {message: "Driver not found!"}
    }

    else{
        response.type("application/json").code(200);
        return { driver }
    }
})

server.listen({port: 3333}, () => {
    console.log("Server init")
})