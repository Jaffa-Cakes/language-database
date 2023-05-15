import { Inter } from 'next/font/google'
import Menu from './../components/menu';

// This is the Home Page

export default function Index() {
  return (
    <div>
      <Menu />
      <div className="bg-zinc-900 px-10 h-screen">
        <div className="bg-zinc-900 py-8 pb-0 flex justify-center">
          <h1 className="text-red-700 font-bold text-3xl font-sans">
            WOI WURRUNG DATABASE EXPLORER
          </h1>
        </div>
        <div className="bg-zinc-900 px-4 py-4">
          <h2 className="text-red-700 font-bold text-lg font-sans flex justify-center py-4">
            RECENTLY SEARCHED
          </h2>
          <div className="grid grid-cols-4 grid-gap-4 justify-items-center">
            <a href="www.recently.com">PLACEHOLDER FOR API?</a>
            <a href="www.recently.com">PLACEHOLDER FOR API?</a>
            <a href="www.recently.com">PLACEHOLDER FOR API?</a>
            <a href="www.recently.com">PLACEHOLDER FOR API?</a>
            <a href="www.recently.com">PLACEHOLDER FOR API?</a>
            <a href="www.recently.com">PLACEHOLDER FOR API?</a>
            <a href="www.recently.com">PLACEHOLDER FOR API?</a>
            <a href="www.recently.com">PLACEHOLDER FOR API?</a>
            <a href="www.recently.com">PLACEHOLDER FOR API?</a>
            <a href="www.recently.com">PLACEHOLDER FOR API?</a>
            <a href="www.recently.com">PLACEHOLDER FOR API?</a>
            <a href="www.recently.com">PLACEHOLDER FOR API?</a>
          </div>
        </div>
      </div>
      <div>
        <footer className="bg-red-900">
          <p className="font-bold font-sans text-md">
            Developed by Woi Wurrung Warriors
          </p>
        </footer>
      </div>
    </div>
  );
}
