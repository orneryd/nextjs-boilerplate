import Image from 'next/image';

import Link from 'next/link'

export default async function Users({ params }: { params: { id: string } }) {
  let data = await fetch('http://localhost:3000/api/users/?id=' + params.id)
  let userDetails = await data.json()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <Image width="200" height="200" className='profile-picture-large' src={userDetails.image} alt={userDetails.image}></Image>
          <div>
        {userDetails.firstName} {userDetails.lastName} - {(userDetails.username)}
        </div>
        </div>
        {JSON.stringify(userDetails)}
      </main>
    </div>
  );
}
