import { createEffect } from 'solid-js';

import QuestionSVG from './../assets/question.svg';

import './question.css';

export default function Question() {
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
    <div className='question-wrap'>
      <canvas id='myCanvas'></canvas>
      <p className='question-text'>
        The work evades capture within a set of rules about{' '}
        <span className='question-highlight'>"what is good design".</span> The
        work doesn't <span>reduce and nei</span>ther does its maker. In the
        numerous interv<span>iews,</span> talks, wo<span>rkshops</span> and
        other public explorations of his id<span>ea</span>s in the past thr
        <span>ee or fo</span>ur years, Carson has declined to arrive{' '}
        <span>a</span>t some pat statme<span>nt of in</span>tent that may be
        used as a broad interpretation of the wo<span>rk. Inste</span>ad, he
        prefers to let it stand on its own terms, piece by{' '}
        <span>piece, seen</span> and admired [or rejected] by those it was aimed{' '}
        <span>at. In teachin</span>g he likes others to show what is in them,
        &nbsp;ques<span>tioning&nbsp; the</span>&nbsp; work&nbsp; which&nbsp;
        reflects&nbsp; his&nbsp; own or the styles of others.{' '}
        <span>In his se</span>lection of new artists, there is a tendency to
        admire the n<span>aiv</span>e; in his commissioning of estab-lished
        illustrators or photographers, there is a tendency to offer these
        artists the freedom to e<span>xp</span>
        eriment, to break from the stric-tures that are normally{' '}
        <span>contingent</span> on a brief. In the same way that he refuses to
        give him <span>self a con</span>clusive structure, or acknowl-edge the
        theoretical framewor<span>k</span>s and critiques applied by others,
      </p>
      <QuestionSVG />
    </div>
  );
}
