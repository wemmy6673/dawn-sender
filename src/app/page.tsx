// app/page.jsx
import AirdropForm from './components/AirdropForm';

export default function Home() {
  return (
    <div>
      <main className="p-6 text-center min-h-screen w-full text-white">
        <h1 className="text-3xl font-bold my-10">Welcome to My Dapp 🚀</h1>
        <AirdropForm />
      </main>
    </div>
  );
}
