import SectionContainer from '../../SectionContainer/SectionContainer';
import ButtonLink from '../../ui/ButtonLink/ButtonLink';
import styles from './Hero.module.scss';

function Hero() {
    return (
        <section>
            <SectionContainer section={'Hero'}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentInner}>
                        <div className={styles.caption}>Hi, I'm Samantha &mdash;</div>
                        {/* <h1 className={styles.title}>Designer, developer &amp; creative problem solver</h1> */}
                        <h1 className={styles.title}>I design &amp; build web experiences that convert</h1>
                        <ButtonLink url={'#work'} title={'Jump to work section'}>
                            See my work
                        </ButtonLink>
                    </div>
                    <div className={styles.squareLarge}></div>
                    <div className={styles.squareSmall}></div>
                </div>
            </SectionContainer>
        </section>
    )
}

export default Hero;