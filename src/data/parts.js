const images = import.meta.glob('./images/*.png', { eager: true });

const parts = {
  heads: [
    {
      id: 1,
      description:
        'A robot head with an unusually large eye and teloscpic neck -- excellent for exploring high spaces.',
      title: 'Large Cyclops',
      src: images['./images/head-big-eye.png'].default,
      type: 'heads',
      cost: 1225.5,
    },
    {
      id: 2,
      description:
        'A friendly robot head with two eyes and a smile -- great for domestic use.',
      title: 'Friendly Bot',
      src: images['./images/head-friendly.png'].default,
      cost: 945.0,
      type: 'heads',
      onSale: true,
    },
    {
      id: 3,
      description:
        'A large three-eyed head with a shredder for a mouth -- great for crushing light medals or shredding documents.',
      title: 'Shredder',
      src: images['./images/head-shredder.png'].default,
      type: 'heads',
      cost: 1275.5,
    },
    {
      id: 4,
      description: 'A simple single-eyed head -- simple and inexpensive.',
      title: 'Small Cyclops',
      src: images['./images/head-single-eye.png'].default,
      type: 'heads',
      cost: 750.0,
    },
    {
      id: 5,
      description:
        'A robot head with three oscillating eyes -- excellent for surveillance.',
      title: 'Surveillance Bot',
      src: images['./images/head-surveillance.png'].default,
      type: 'heads',
      cost: 1255.5,
    },
  ],
  arms: [
    {
      id: 1,
      description:
        'An articulated arm with a claw -- great for reaching around corners or working in tight spaces.',
      title: 'Articulated',
      src: images['./images/arm-articulated-claw.png'].default,
      type: 'arms',
      cost: 275,
    },
    {
      id: 2,
      description:
        'An arm with two independent claws -- great when you need an extra hand. Need four hands? Equip your bot with two of these arms.',
      title: 'Two Clawed',
      src: images['./images/arm-dual-claw.png'].default,
      type: 'arms',
      cost: 285,
    },
    {
      id: 3,
      description: 'A telescoping arm with a grabber.',
      title: 'Grabber',
      src: images['./images/arm-grabber.png'].default,
      type: 'arms',
      cost: 205.5,
    },
    {
      id: 4,
      description:
        'An arm with a propeller -- good for propulsion or as a cooling fan.',
      title: 'Propeller',
      src: images['./images/arm-propeller.png'].default,
      type: 'arms',
      cost: 230,
      onSale: true,
    },
    {
      id: 5,
      description: 'A short and stubby arm with a claw -- simple, but cheap.',
      title: 'Stubby Claw',
      src: images['./images/arm-stubby-claw.png'].default,
      type: 'arms',
      cost: 125,
    },
  ],
  torsos: [
    {
      id: 1,
      description:
        'A torso that can bend slightly at the waist and equiped with a heat guage.',
      title: 'Flexible Gauged',
      src: images['./images/torso-flexible-gauged.png'].default,
      type: 'torsos',
      cost: 1575,
    },
    {
      id: 2,
      description: 'A less flexible torso with a battery gauge.',
      title: 'Gauged',
      src: images['./images/torso-gauged.png'].default,
      type: 'torsos',
      cost: 1385,
    },
    {
      id: 3,
      description: 'A simple torso with a pouch for carrying items.',
      title: 'Gauged',
      src: images['./images/torso-pouch.png'].default,
      type: 'torsos',
      cost: 785,
      onSale: true,
    },
  ],
  bases: [
    {
      id: 1,
      description: 'A two wheeled base with an accelerometer for stability.',
      title: 'Double Wheeled',
      src: images['./images/base-double-wheel.png'].default,
      type: 'bases',
      cost: 895,
    },
    {
      id: 2,
      description: 'A rocket base capable of high speed, controlled flight.',
      title: 'Rocket',
      src: images['./images/base-rocket.png'].default,
      type: 'bases',
      cost: 1520.5,
    },
    {
      id: 3,
      description:
        'A single-wheeled base with an accelerometer capable of higher speeds and navigating rougher terrain than the two-wheeled variety.',
      title: 'Single Wheeled',
      src: images['./images/base-single-wheel.png'].default,
      type: 'bases',
      cost: 1190.5,
    },
    {
      id: 4,
      description: 'A spring base - great for reaching high places.',
      title: 'Spring',
      src: images['./images/base-spring.png'].default,
      type: 'bases',
      cost: 1190.5,
    },
    {
      id: 5,
      description:
        'An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.',
      title: 'Triple Wheeled',
      src: images['./images/base-triple-wheel.png'].default,
      type: 'bases',
      cost: 700.5,
    },
  ],
};
export default parts;
