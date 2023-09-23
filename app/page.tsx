// "use client"


import Image from 'next/image';
// import { bluzelle, API, BluzelleConfig } from 'bluzelle';
import {bluzelle, API, BluzelleConfig} from "bluzelle";
import { log } from 'console';

import {useEffect, useState} from "react";

const params: BluzelleConfig = {
  mnemonic: "essence energy object margin early between cereal curtain imitate link sentence practice",
  uuid: '20fc19d4-7c9d-4b5c-9578-8cedd756e0ea',
  endpoint: 'https://a.client.sentry.net.bluzelle.com:1317',
  // chainId: 'bluzelle-9'
};

const api: API = bluzelle(params);

//  bluzelle1pd8k9wdu9t52snppdkqgep6u7ea5ym7kfagckh

api.account('bluzelle1pd8k9wdu9t52snppdkqgep6u7ea5ym7kfagckh')
	.then((info) => console.log({info}))
	.catch((error) => console.log(error));

  api.count()
	.then((info) => console.log({info}))
	.catch((error) => console.log(error));

async function  createSomekey() {  

  
  
  console.log(api.getAddress()); 

  // const res = await api.getBNT();
	// // .then((info) => { console.log({info}); })
	// // .catch((error) => { console.log(error); });
  // // .create("somekey", "somevalue", { 'gas_price': 0.002 })
  // console.log(JSON.stringify(res));
  
  // return  res
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


