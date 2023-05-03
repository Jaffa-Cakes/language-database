import { Inter } from 'next/font/google'

export default function Login() {

  return (
    <main className="bg-gray-200 min-h-screen">
        <div className="container mx-auto flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Login</h1>
                <form action="" method="POST">
                    <div className="mb-4">
                        <label className="block text-sm mb-2">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="Email Address" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm mb-2">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-indigo-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-indigo-600">Login</button>
                        <a href="#" className="text-sm text-indigo-500 hover:text-indigo-600">Forgot password?</a>
                    </div>
                </form>
            </div>
        </div>
    </main>
  )
}
