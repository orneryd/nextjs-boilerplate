import Image from 'next/image';
import Link from 'next/link'

export default async function Users() {
  let data = await fetch('http://localhost:3000/api/users')
  let userList = await data.json()
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          {userList.map(({userId, firstName, lastName, username, image}: any) => (
            <Link key={userId} href={`/users/${encodeURIComponent(userId)}`}><li><Image width="30" height="30" className='profile-picture' src={image} alt={''}></Image>{firstName} {lastName} - {(username)}</li></Link>
          ))}
        </ul>
      </main>
    </div>
  );
}
