import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import '../App.css';

export function LoadingSkeleton() {
    return (
        <main>
            <h2>Screen Skeleton</h2>

            <section>
            { Array(6).fill(0).map((item, key) => (
                <article key={key}>
                    <p><Skeleton style={{borderRadius: '50%', width: '55px', height: '55px'}} /></p>

                    <p><Skeleton count={5} style={{width: '145px', height: '13px', marginBottom: '5px'}} /></p>
                </article>
            ))}
            </section>
      </main>
    )
}