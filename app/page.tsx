import Image from 'next/image';
import { bluzelle, API, BluzelleConfig } from 'bluzelle';


const api: BluzelleConfig = {
  mnemonic: "demand daughter mention alley change inside source social estate antique select wrist",
  uuid: Date.now().toString(),
  endpoint: 'https://a.client.sentry.net.bluzelle.com:1317',
  chain_id: 'bluzelle-9',
};

const bz: API = bluzelle(api);


console.log(bz); 


async function  createSomekey() {
  // 

  const res = bz.keyValues()
	.then((info) => { console.log(info); })
	.catch((error) => { console.log(error); });
  // .create("somekey", "somevalue", { 'gas_price': 0.002 })
  // console.log(bz);
  
  return  res
}

export default async function Home() {

  const key = await createSomekey();
  console.log(key)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      {/* {{key}} */}
      </div>


      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      </div>
    </main>
  )
}


