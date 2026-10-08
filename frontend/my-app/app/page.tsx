import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <section className="w-full max-w-2xl text-center">
        <p className="mb-4 font-bold tracking-widest text-indigo-400">
          学内チーム制作マッチング
        </p>

        <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-8xl">
          GameMatch
        </h1>

        <h2 className="mt-6 text-2xl font-bold text-white">
          作りたいを、一緒に形に。
        </h2>

        <p className="mt-4 leading-8 text-slate-300">
          得意なことや、挑戦したいことから仲間を見つけよう。
          <br />
          あなたのアイデアが、チーム制作の第一歩になる。
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/register"
            className="rounded-xl bg-indigo-500 px-8 py-4 font-bold text-white transition-colors hover:bg-indigo-600"
          >
            新規登録
          </Link>

          <Link
            href="/login"
            className="rounded-xl border border-slate-600 px-8 py-4 font-bold text-white transition-colors hover:bg-slate-800"
          >
            ログイン
          </Link>
        </div>

        <p className="mt-10 text-sm text-slate-400">
          学科や学年を超えて、制作仲間とつながろう。
        </p>
      </section>
    </main>
  );
}