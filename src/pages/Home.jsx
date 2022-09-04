import { MetaProvider } from 'solid-meta';
import { createEffect } from 'solid-js';

import Question from './../components/question';
import Column from './../components/column';

export default function HomePage() {
  createEffect(() => {
    const inner = document.querySelector('.inner');

    inner.addEventListener('mouseenter', () =>
      document.body.classList.toggle('darkmode')
    );

    inner.addEventListener('mouseleave', () =>
      document.body.classList.toggle('darkmode')
    );
  });
  return (
    <MetaProvider>
      <h1>Secret memoirs of a renaissance pope</h1>
      <Question />
      <Column />
    </MetaProvider>
  );
}
