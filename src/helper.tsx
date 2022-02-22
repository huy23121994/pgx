export type Pega = {
  id: number;
  name: string;
  winRate: number;
  energy: number;
  owner: string;
  avatar: string;
  renterId: number;
};

export const PROXY_CORS = "";

export function ellipsis(address: string) {
  return address
    ? `${address.substring(0, 5)}...${address.substring(address.length - 4)}`
    : null;
}

export async function fetchPegas(id: number): Promise<Pega> {
  return new Promise((resolve, reject) => {
    fetch(`${PROXY_CORS}https://api.pegaxy.io/pega/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.status) {
          const pega = data.pega;
          resolve({
            id: id,
            name: pega.name,
            winRate: (pega.win / (pega.win + pega.lose)) * 100,
            energy: pega.energy,
            owner: pega.owner?.address,
            avatar: pega.design?.avatar,
            renterId: pega.renterId,
          });
        } else {
          throw new Error("Cannot fetch data.");
        }
      })
      .catch((e) => reject(e));
  });
}
