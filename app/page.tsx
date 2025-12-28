export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center space-y-8">

        <h1 className="text-4xl md:text-5xl font-bold">
          Create Gym Instagram Reels in 30 Seconds
        </h1>

        <p className="text-gray-400 text-lg">
          AI Gym Reels helps gym owners generate motivational and promotional
          Instagram content — without designers, editors, or agencies.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-neutral-900 p-5 rounded-xl">
            <h3 className="font-semibold mb-2">Stay Consistent</h3>
            <p className="text-sm text-gray-400">
              Post powerful gym content every day without stress.
            </p>
          </div>

          <div className="bg-neutral-900 p-5 rounded-xl">
            <h3 className="font-semibold mb-2">Attract New Members</h3>
            <p className="text-sm text-gray-400">
              Turn Instagram Reels into a real lead machine.
            </p>
          </div>

          <div className="bg-neutral-900 p-5 rounded-xl">
            <h3 className="font-semibold mb-2">Built for Gyms</h3>
            <p className="text-sm text-gray-400">
              Motivational, promotional, and mindset content — done for you.
            </p>
          </div>
        </div>

        <a
  href="https://wa.me/21628023092"
  target="_blank"
  className="inline-block bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg"
>
  Get Early Access
</a>


        <p className="text-sm text-gray-500">
          Early users get free access during beta.
        </p>

      </div>
    </main>
  );
}
