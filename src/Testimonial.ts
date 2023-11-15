export enum siteNames {
   google,
   facebook,
}

export interface Testimonial {
   content: string;
   name: string;
   role?: string;
   siteName: siteNames;
   link: string;
}

export const Testimonials: Testimonial[] = [
   {
      content:
         "Great training environment, as a visitor to the area I felt welcomed by everyone the moment I walked in the door. Jaymin brings great enthusiasm to his instruction and takes the time to help with the little details that are so critical. Would highly recommend this gym. Ionia county is blessed to have it!",
      name: "Tyler Ellis",
      role: "Student",
      siteName: siteNames.google,
      link: "https://g.co/kgs/yqMcK2",
   },
   {
      content: `Highly recommend! A must try for all women in my opinion. You may just surprise yourself at how much you love it like I did! If you’re looking for a family friendly atmosphere and a positive place for your kids to learn and grow, this is it. Coach Jaymin & Coach Liz are phenomenal at teaching while making the sport interesting and achievable, no matter your skill level coming in!`,
      name: "Erice Feldpausch",
      role: "Student",
      siteName: siteNames.facebook,
      link: "https://www.facebook.com/LyonsBJJ/reviews",
   },
   {
      content: `As someone who has been searching for over a year to try to find a gym that felt safe, respectful, empowering and supportive I am so excited that I will be working with Lyons Brazilian Jiu-Jitsu!! After a single session I felt all of the ways that I was looking to feel and more. The owners were brilliant, generous, respectful and incredibly well-educated! Jaymin was able to inspire motivation out of me when I was unsure what I could bring to the session. Liz helped me to understand my body with just a few causal comments  that were profound and so empwering to me. The approach to the lessons was done so subtly that I didn't realize how much I had learned until I was leaving and reflecting on what I truly gained from this experience. The guidance from the owners was both so comfortable and natural, it was easy to forget that I had ever been nervous or apprehensive about what the experience would be like. From beginngers to pros, there is something that everyone could gain from this gym and these owners!`,
      name: "Jacqueline Newsome",
      role: "Student",
      siteName: siteNames.google,
      link: "https://g.co/kgs/JBW9M2",
   },
   {
      content: `Coach Jaymin is awesome! Our son loves coming and learning. Highly recommended!`,
      name: "Craig Smith",
      role: "Parent",
      siteName: siteNames.facebook,
      link: "https://www.facebook.com/LyonsBJJ/reviews",
   },
   {
      content: `There’s a good reason this gym is rated 5 stars.  Jaymin is an amazing instructor and person. The culture here reflects Jaymin’s playful spirit and attention to detail. There’s way more parking than you think, keep following the signs; you’ve just discovered a hidden gem.`,
      name: "Damian Hansen",
      role: "Student",
      siteName: siteNames.google,
      link: "https://g.co/kgs/g6TR7J",
   },
   {
      content: `Coach Jaymin is amazing I've had the pleasure to train with him many times. He is super invested in the growth of the people around him and one of the best teachers I've ever met strongly recommend training with him.`,
      name: "Derek Alumbaugh",
      role: "Student",
      siteName: siteNames.facebook,
      link: "https://www.facebook.com/LyonsBJJ/reviews",
   },
   {
      content: `This is a great gym! It’s always a good time and the coach is very knowledgeable. I appreciate that there is a strong emphasis on safety while still providing students the opportunity to get creative.

If you’ve ever considered trying martial-arts I highly recommended giving this gym a shot!`,
      name: "Noah D",
      role: "Student",
      siteName: siteNames.google,
      link: "https://g.co/kgs/Ku7afF",
   },
   {
      content: `Since starting with Lyons BJJ  a little over two months ago my 10 year old granddaughter’s grades at school have went up one or two from last semester.AMAZING! 

I have 2 that go to the 7-12 year old class and to watch Coach with these kids , I’m in ahh.
      
Such a wonderful kid friendly but disciplined place that teaches kid’s more than just the sport.THANK YOU Coach Jaymin and Liz for bringing this to us!!!`,
      name: "Lisa Harvey Brownlee",
      role: "Parent",
      siteName: siteNames.facebook,
      link: "https://www.facebook.com/LyonsBJJ/reviews",
   },
   {
      content: `I have been attending Lyons BJJ for 3-4 Weeks now about 4 times a week personally, and my son has been attending 3 times a week for the same amount of time. We both love the gym. The workouts are great the instructor is very knowledgeable and is amazing with kids. One of the biggest reasons I started was so that my son could do a martial art and learn some very import skills such as discipline, patience, and resilience. So far I have not been let down. I also find that one of the most important focuses of the gym is safety, which I think is amazing, because it helps to encourage longevity and persistence. We focus on safety so that injuries are minimal and everyone can keep training. I have been to many gyms that have not had that focus and as someone in my mid 30's I don't heal like I did when I was young so being able to stay away from injuries is very important to me.`,
      name: "Ryan Johns",
      role: "Student",
      siteName: siteNames.google,
      link: "https://g.co/kgs/v6YnLe",
   },
   {
      content: `Amazing for kids and adults!`,
      name: "Lana Johns",
      role: "Student",
      siteName: siteNames.facebook,
      link: "https://www.facebook.com/LyonsBJJ/reviews",
   },
   {
      content: `Very friendly owner. The gym is absolutely beautiful. Thanks a lot. I would highly recommend training here!`,
      name: "John Rizqallah",
      role: "Student",
      siteName: siteNames.google,
      link: "https://g.co/kgs/WLwZeu",
   },
   {
      content: `When I saw Lyons-BJJ coming right down the road from me, my husband and I were SO EXCITED!!! We have always wanted to get our boys into it to learn it and to have it help with some discipline. Coach J is hands down amazing with the kids!! He brings the energy to practice. My boys are always so excited to go!! I have two boys that would be considered two different class/age group but Jaymin has been great at letting them all practice together. He makes sure to remind them the moves are to only be done in his presence(which I really liked hearing him tell my boys!!), he makes sure they’re comfortable with the moves and know when to TAP OUT! When I watch him teach my boys I just think he was made to do this and was made to work with kids!`,
      name: "Cari Gross",
      role: "Parent",
      siteName: siteNames.facebook,
      link: "https://www.facebook.com/LyonsBJJ/reviews",
   },
   {
      content: `Awesome place. Very welcoming, cool atmosphere, overall great place to train.`,
      name: "Tyler Dickenson",
      role: "Student",
      siteName: siteNames.google,
      link: "https://g.co/kgs/XcQ6tB",
   },
];
