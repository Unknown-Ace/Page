import React, { useEffect } from 'react';
import './styles.css';
import { createConfetti } from './confetti';

const App = () => {
    useEffect(() => {
        const confettiContainer = document.getElementById('confetti-blast');
        createConfetti(confettiContainer, 200); // Create 200 confetti pieces

        // Fade-in text after confetti blast
        setTimeout(() => {
            document.getElementById('heading').style.opacity = 1;
            document.getElementById('paragraph').style.opacity = 1;
        }, 1000); // Adjust timing as necessary
    }, []);

    return (
        <div id="app">
            <div id="confetti-blast"></div>
            <h1 id="heading" style={{ opacity: 0, transition: 'opacity 2s' }}>Happy Birthday To The Most Beautiful Girl! Leishaa Shukla!</h1>
            <p id="paragraph" style={{ opacity: 0, transition: 'opacity 2s' }}>
                I don't know how I am supposed to start this because I am writing you some stuff (that's still not enough). You have been a great friend, great classmate, the greatest person to exist in my life (I'll keep telling you that until you get tired of it hehe 🤭). I really hope you have the best birthday today well because I am the one attending it :) . The way you care, care for me, care for everybody is just so pure like honestly never change that. The sensitive leishaa is such an innocent personality and I'll always make sure to never let her cry or give her a reason to cry. Ik I have done that often times but from now on never, I will never hurt smol leishaa again, she's just too cuteeeeee :D I have fucked up a lot of times and a lot of stuff I know but I hope you'll always be there to correct me like you always have, ik our bond hasn't been the same lately but I am trying to fix it and I really hope it gets better for both of us. I hope the next month is nothing but happiness for you, I never ever want to see you sad or depressed :( I know life's been too harsh on you for quite some time now but it gets better trust me it does. I will definitely tickle your legs if I get a chance :D (not in a weird way lmao). Remember our peak friendship times sitting together, you drawing on my hands my notebooks, giggling and shit then manju ma'am scolding you with "leader" 😂😂, me giving you head pats when you slept (very rare), me tickling your leg with scale :), SPEACIALLY ME PRESSING YOUR SHOES UNDER MINE THAT WAS SO FUN BAHAHAHAHAA. Well well a lot of stuff actually but realizing that's never coming back makes me really sad :( but no worries we have a lot of time still to make more memories and we surely will and ones which are even more fun. I just hope our friendship never breaks I won't let it also I am still deciding if I should write a physical letter too so that's gonna be a reveal on your birthday if I made one or not hehe. This and the other stuff is the reason I told you I am gonna be busy for a few days. You know me I am very clingy when I show it so yehhh heh :) hope you like all this and all the other stuff. The next page is something I made just because I said I would, ye ik I am late you don't have to answer it or anything it's fine :). May you, you the the most amazing girl have the bestest birthday today!! <br></br> Happy Birthday my Kachuyi (spiderman, sherni, madam, chudail, pookie, queen)!! ❤️🎉 <br></br> <br></br>
                (There is a hidden easter egg on this page find it and click on it)
            </p>
            <p id="paragraph" style={{ opacity: 0, transition: 'opacity 2s' }}> 
                <a href='proposal.html'> Will you be my Girlfriend?</a>
            </p>
            <div id="grass"></div>
        </div>
    );
};

export default App;
