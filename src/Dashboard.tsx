import { Image } from "@chakra-ui/image";
import {
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
import { Tag } from "@chakra-ui/tag";
import { useEffect, useState } from "react";
import { ellipsis, fetchPegas, Pega } from "./helper";

const hoang = [103038, 24056, 62661, 53202, 30396, 122488, 105801, 24486];
const hieu = [70527, 15538];
const hang = [128957, 18352, 4099];
const son = [10323, 50960];
const my = [24435, 26726, 20822, 10367, 17816, 6435, 196783, 103450];

const pegaIDs = [...my, ...hoang, ...hieu, ...hang, ...son];

function renter(id: number) {
  if (hoang.includes(id)) return "Hoang";
  if (my.includes(id)) return "My";
  if (hieu.includes(id)) return "Hieu";
  if (son.includes(id)) return "Son";
  if (hang.includes(id)) return "Hang";
}

const Dashboard = () => {
  const [pegas, setPegas] = useState<Pega[]>([]);

  useEffect(() => {
    const data = pegaIDs.map((id) => fetchPegas(id));
    Promise.all(data).then((pegas) => {
      setPegas(pegas);
    });
  }, []);

  return (
    <Table variant="simple">
      <TableCaption>Pegas dashboard</TableCaption>
      <Thead>
        <Tr>
          <Th>No.</Th>
          <Th>Avatar</Th>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th colSpan={2} textAlign="center">
            Renter - ID
          </Th>
          <Th>Energy</Th>
          <Th>Win rate</Th>
          <Th>Owner</Th>
        </Tr>
      </Thead>
      <Tbody>
        {pegas.map((pega, id) => (
          <Tr key={pega.id}>
            <Td>{id + 1}</Td>
            <Td>
              <Image src={pega.avatar} w="40px" />
            </Td>
            <Td>{pega.id}</Td>
            <Td>{pega.name}</Td>
            <Td>{renter(pega.id)}</Td>
            <Td>{pega.renterId}</Td>
            <Td>
              <Tag
                colorScheme={
                  pega.energy > 10
                    ? pega.energy > 19
                      ? "red"
                      : "yellow"
                    : "green"
                }
              >
                {pega.energy}/25
              </Tag>
            </Td>
            <Td>{(+pega.winRate).toFixed(2)}%</Td>
            <Td>{ellipsis(pega.owner)}</Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>No.</Th>
          <Th>Avatar</Th>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Renter</Th>
          <Th>Win rate</Th>
          <Th>Energy</Th>
          <Th>Owner</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
};

export default Dashboard;
