import {
  HeartPulse,
  GaugeCircle,
  BedDouble,
  Activity,
  BrainCircuit,
  EyeOff,
} from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Eliud",
    company: "Marathon Runner",
    image: user1,
    text: "Pulse helped me understand how much sleep and recovery I really need. I’ve never felt more in control of my performance.",
  },
  {
    user: "Kelly",
    company: "Fitness Coach",
    image: user2,
    text: "I train smarter now—not just harder. Pulse has been a game-changer for my workouts.",
  },
  {
    user: "Casey",
    company: "Triathlete",
    image: user3,
    text: "The insights are legit. I can see how my body responds to stress, travel, and training—and adjust instantly.",
  },
  {
    user: "Jud",
    company: "Busy Entrepreneur",
    image: user4,
    text: "I never realized how much stress was affecting my workouts until Pulse showed me. Now I balance recovery and effort like a pro.",
  },
  {
    user: "Juanita",
    company: "CrossFit Athlete",
    image: user5,
    text: "No screen was a weird idea at first—but now I love it. I’m not distracted, and I actually pay attention to how I feel.",
  },
  {
    user: "Rhonda",
    company: "New to Fitness",
    image: user6,
    text: "As a beginner to fitness, Pulse gave me confidence. It tells me exactly when to train, rest, and recover—and I feel amazing.",
  },
];

export const features = [
  {
    icon: <HeartPulse />,
    text: "Real-Time Heart Rate Monitoring",
    description:
      "Track your heart’s response during workouts, stress, and sleep—all without a distracting screen.",
  },
  {
    icon: <GaugeCircle />,
    text: "Recovery Score",
    description:
      "Know how ready your body is for exertion each day with a personalized recovery score.",
  },
  {
    icon: <BedDouble />,
    text: "Sleep Optimization",
    description:
      "Understand your sleep cycles and learn how to improve them for deeper recovery and better performance.",
  },
  {
    icon: <Activity />,
    text: "Daily Strain Tracking",
    description:
      "Get real-time strain levels to guide your training—never undertrain or overtrain again.",
  },
  {
    icon: <BrainCircuit />,
    text: "Respiratory Rate & HRV",
    description:
      "Advanced metrics like Heart Rate Variability and Respiratory Rate give deeper insights into stress, illness, and fatigue.",
  },
  {
    icon: <EyeOff />,
    text: "No Screen. No Noise.",
    description:
      "Designed to reduce distractions—Pulse focuses on insights, not notifications.",
  },
];

export const checklistItems = [
  {
    title: "Wear It. Forget It.",
    description:
      "Slip on your Pulse band—it’s lightweight, durable, and designed for 24/7 wear.",
  },
  {
    title: "Data Collection",
    description:
      "Pulse continuously tracks key biometrics like heart rate, HRV, sleep quality, and more.",
  },
  {
    title: "AI-Driven Insights",
    description:
      "Your data is analyzed in real-time to provide personalized feedback and coaching through the mobile app.",
  },
  {
    title: "Smarter Training Decisions",
    description:
      "Wake up to daily recovery and strain recommendations, so you know when to push or rest.",
  },
];

export const pricingOptions = [
  {
    title: "Starter",
    price: "$19/month",
    features: [
      "Full access to health & performance insights",
      "Mobile app coaching",
      "Sleep & recovery tracking",
    ],
  },
  {
    title: "Pro",
    price: "$29/month",
    features: [
      "Includes everything in Starter",
      "Strain coaching + HRV & Respiratory Rate analysis",
      "Weekly performance reports",
    ],
  },
  {
    title: "Elite",
    price: "$49/month",
    features: [
      "All features unlocked",
      "Dedicated performance coach",
      "Priority support & early access to new tools",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "How It Works" },
  { href: "#", text: "Setup & Installation" },
  { href: "#", text: "Health Metrics Explained" },
  { href: "#", text: "Training & Recovery Guides" },
  { href: "#", text: "Support Center" },
];


export const platformLinks = [
  { href: "#", text: "Smartwatch Features" },
  { href: "#", text: "iOS & Android App" },
  { href: "#", text: "Biometric Sensors" },
  { href: "#", text: "Membership Plans" },
  { href: "#", text: "Product Updates" },
];


export const communityLinks = [
  { href: "#", text: "Member Stories" },
  { href: "#", text: "Live Q&A Sessions" },
  { href: "#", text: "Performance Workshops" },
  { href: "#", text: "Athlete Spotlights" },
  { href: "#", text: "Careers at Pulse" },
];