'use client';

import { signIn } from 'next-auth/react';

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Sign In</h1>
        <button
            data-cy="signin-button-github"
          onClick={() => signIn('github')}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
