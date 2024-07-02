import {
  EQUIPMENT_DELAY_BEFORE_ANIMATION,
  EQUIPMENT_TRANSITION_ANIMATION,
  HOME_DELAY_BEFORE_ANIMATION,
  HOME_TRANSITION_ANIMATION
} from "./config";

interface Image {
  webp: string;
  png: string;
}

interface Equipment {
  title: string;
  description: string;
  miniDescription: string;
  moreInfo: () => JSX.Element;
  image: Image;
}

export const equipment: Equipment[] = [
  {
    title: 'EpsonSureColor SC-P20000',
    description: 'The Epson SureColor SC-P20000 is a large-format inkjet printer designed for high-production photographic, fine art, and indoor display graphics printing.',
    miniDescription: '2,400 x 1,200 DPI Printing Resolution',
    moreInfo: () => (
      <>
        <p>Explore our state-of-the-art printing equipment, meticulously selected to deliver superior quality for building wrapping, indoor, and outdoor printing projects. Discover how our advanced technology ensures precision and excellence in every print job.</p><br/><br/>
        <p>Key features include:</p><br/>
        <p><strong>1. PrecisionCore MicroTFP Printhead:</strong> This advanced printhead technology includes 8000 nozzles for high-speed and precise printing.</p>
        <p><strong>2. UltraChrome Pro 10-Color Ink Set:</strong> Offers a wide color gamut and includes four levels of gray for excellent black-and-white prints.</p>
        <p><strong>3. High-Capacity Ink Tanks:</strong> 700ml ink tanks reduce the need for frequent replacements, supporting high-volume printing.</p>
        <p><strong>4. Advanced Media Handling:</strong> The printer supports various media types and sizes, including cut sheets up to 64 inches wide and thick media up to 1.5mm.</p>
      </>
    ),
    image: {
      webp: '/equipment/webp/equipment-1.webp',
      png: '/equipment/png/equipment-1.png',
    },
  },
  {
    title: 'Infiniti / Challenger FY-3208T',
    description: 'The Infiniti / Challenger FY-3208T is a high-performance, wide-format digital inkjet printer designed for large-scale outdoor and indoor printing applications.',
    miniDescription: 'Print at high speed—up to 157 m2/hr',
    moreInfo: () => (
      <>
        <p>The Infiniti / Challenger FY-3208T is a high-performance, wide-format digital inkjet printer designed for
          large-scale outdoor and indoor printing applications. Here are some key features and specifications:</p><br/>
        <p><strong>1. Print Technology:</strong> The printer utilizes Seiko SPT-510/35pl print heads, known for their high speed
          and precision, featuring 510 nozzles and capable of producing 720 DPI resolution.</p>
        <p><strong>2. Print Speed:</strong> It offers various print modes, including draft mode at 101 square meters per hour and
          high-quality mode at 28 square meters per hour, making it suitable for both fast production and high-detail
          jobs.</p>
        <p><strong>3. Media Handling:</strong> The FY-3208T supports media widths up to 3.2 meters (10.5 feet) and can handle a
          variety of media types such as vinyl, polyester, and backlit film, with a maximum media thickness of
          4mm.</p>
        <p><strong>4. Ink System:</strong> The printer uses solvent or eco-solvent inks with a continuous refill system, ensuring
          long print runs without frequent interruptions.</p>
        <p><strong>5. Heating System:</strong> It includes a three-way intelligent heater to enhance print quality by ensuring
          the optimal drying of ink on various media types.</p>
        <p><strong>6. Build and Design:</strong> Constructed with a full aluminum platform for durability and stability, it
          features a robust design ideal for heavy-duty use.</p>
      </>
    ),
    image: {
      webp: '/equipment/webp/equipment-2.webp',
      png: '/equipment/png/equipment-2.png',
    },
  },
  {
    title: 'Epson SureColor SC-S80610L',
    description: 'The Epson SureColor SC-S80610L is a high-performance, large-format printer designed for creating high-quality signage and display graphics.',
    miniDescription: '1,440 x 1,440 DPI Printing Resolution',
    moreInfo: () => (
      <>
        <p>The Epson SureColor SC-S80610L is a high-performance, large-format printer designed for creating high-quality
          signage and display graphics. Here are some key features and specifications:</p><br/>
        <p><strong>1. Printing Technology:</strong> It uses dual Epson PrecisionCore TFP printheads and UltraChrome GS3
          inks with Red, providing superior color accuracy and clarity. This combination allows for an expanded color
          gamut, including the use of white and metallic inks.</p>
        <p><strong>2. Ink System:</strong> The printer is equipped with a bulk ink solution featuring 1.5-liter ink
          pouches, which reduces downtime and lowers ink costs. The ink system supports 10 colors, including Black,
          Light Black, Metallic Silver, Cyan, Light Cyan, Yellow, Magenta, Light Magenta, Red, Orange, and White.</p>
        <p><strong>3. Print Quality and Resolution:</strong> It offers a maximum print resolution of 1440 x 1440 DPI,
          ensuring detailed and vibrant prints. The minimum droplet size is 4.2 picoliters.</p>
        <p><strong>4. Media Handling:</strong> The SC-S80610L can handle media up to 64 inches wide and supports various
          substrates such as clear film, vinyl, canvas, wallpaper, and photographic paper. It also features a
          sophisticated substrate handling system with auto-tension control (AD-ATC), wide-diameter feed rollers, and
          anti-static flexible pressure rollers for precise media feeding.</p>
        <p><strong>5. Productivity and Maintenance:</strong> The printer is designed for high productivity with automated
          printhead maintenance, an ink mist collection system, and a white ink circulation system. These features help
          minimize downtime and ensure consistent print quality.</p>
      </>
    ),
    image: {
      webp: '/equipment/webp/equipment-3.webp',
      png: '/equipment/png/equipment-3.png',
    },
  },
  {
    title: 'Epson UV Printer',
    description: 'The Epson SureColor V7000 is a high-performance UV flatbed printer designed for exceptional quality and versatility in large-format printing.',
    miniDescription: '10-color UltraChrome UV Ink',
    moreInfo: () => (
      <>
        <p>The Epson SureColor V7000 is a high-performance UV flatbed printer designed for exceptional quality and
          versatility in large-format printing. Here are some key features and specifications:</p><br/><br/>
        <p><strong>1. Ink System:</strong> The SureColor V7000 uses a 10-color UltraChrome UV Ink set, including vibrant
          Red, opaque White, and eye-catching varnish. This allows for a broad color gamut and the ability to create
          textured, glossy finishes on prints.</p>
        <p><strong>2. Printing Capabilities:</strong> It can handle a variety of media up to 3.14 inches thick, making
          it suitable for rigid substrates like foam board, wood, metal, and acrylic. The printer also features
          automatic media thickness detection and adjustment for ease of use.</p>
        <p><strong>3. Print Quality:</strong> With eight Epson MicroPiezo printheads and variable droplet technology,
          the SureColor V7000 produces high-precision prints with low graininess and smooth gradation. It is designed to
          deliver high-quality results at production speeds, even when using White and varnish inks.</p>
        <p><strong>4. Productivity and Efficiency:</strong> The printer includes a multi-zone vacuum system to securely
          hold media in place, an integrated ionizer to reduce static electricity, and Epson Edge Print RIP software for
          easy operation and control. These features enhance productivity and ensure consistent print quality.</p>
      </>
    ),
    image: {
      webp: '/equipment/webp/equipment-4.webp',
      png: '/equipment/png/equipment-4.png',
    },
  },
  {
    title: 'Plotter Machine',
    description: 'A plotter machine is a type of printer used primarily for printing vector graphics. Unlike regular printers that print using a series of dots, plotters draw continuous lines, making them ideal for high-precision tasks such as engineering drawings, architectural plans, and detailed maps.',
    miniDescription: 'High-precision vector graphics',
    moreInfo: () => (
      <>
        <p>A plotter machine is a type of printer used primarily for printing vector graphics. Unlike regular printers
          that print using a series of dots, plotters draw continuous lines, making them ideal for high-precision tasks
          such as engineering drawings, architectural plans, and detailed maps.</p><br/>
        <p>There are different types of plotters:</p><br/>
        <p><strong>1. Pen Plotters:</strong> These use actual pens to draw on paper, moving along the X and Y axes to
          create continuous lines. They are highly accurate and can produce large-scale designs with fine detail.</p>
        <p><strong>2. Cutting Plotters:</strong> Instead of drawing with a pen, these plotters use a blade to cut shapes
          out of materials such as vinyl, paper, or fabric. They are commonly used in the signage and garment industries
          to create stickers, decals, and patterns.</p>
        <p><strong>3. Electrostatic Plotters:</strong> These use a dry toner transfer process similar to photocopiers.
          They are faster than pen plotters and can handle larger formats, but the quality of the images is often lower
          than pen plotters.</p>
      </>
    ),
    image: {
      webp: '/equipment/webp/equipment-5.webp',
      png: '/equipment/png/equipment-5.png',
    },
  },
  {
    title: 'Color Printer H3-104s',
    description: 'The ColorPainter H3-104s combines high speed, excellent image quality, and advanced printing technologies, making it a robust solution to produce large-format prints.',
    miniDescription: 'High speed SX ink',
    moreInfo: () => (
      <>
        <p>The ColorPainter H3-104s is a high-performance large-format printer designed for high volume professional
          graphics printing.</p><br/>
        <p><strong>1. Printing Technology:</strong> Utilizes drop-on-demand piezo inkjet technology, which offers
          precise and consistent print quality.</p>
        <p><strong>2. Media and Print Width:</strong> Supports media widths up to 2642 mm (104 inches) and has a maximum
          print width of 2632 mm (103.6 inches). It is capable of handling various media types, including PVC and
          banners.</p>
        <p><strong>3. Inks:</strong> Uses low-odor eco-solvent SX inks, which come in an 8-color configuration (Cyan,
          Magenta, Yellow, Black, Light Cyan, Light Magenta, Gray, and Light Gray). Each color is housed in 1500 ml
          cartridges.</p>
        <p><strong>4. Print Speed and Resolution:</strong> The printer achieves top speeds of up to 56.6 square meters
          per hour and a maximum resolution of 900 dpi. This ensures high productivity and detailed print output.</p>
      </>
    ),
    image: {
      webp: '/equipment/webp/equipment-6.webp',
      png: '/equipment/png/equipment-6.png',
    },
  },
  {
    title: 'SII ColorPainter H2-74s',
    description: 'The ColorPainter H2-74s is well-suited for applications such as banners, posters, window graphics, and vehicle wraps, offering excellent image quality and high productivity.',
    miniDescription: 'Dynamic Dot Printing Technology',
    moreInfo: () => (
      <>
        <p>The SII ColorPainter H2-74s is a high-speed, large-format printer designed for producing high-quality prints
          on various media types. Here are some of its key features and specifications:</p><br/><br/>

        <p><strong>1. Printing Technology:</strong> The printer uses drop-on-demand piezo inkjet technology, ensuring
          precise and consistent print quality.</p>
        <p><strong>2. Media and Print Width:</strong> It supports media widths up to 1900 mm (74.8 inches) and has a
          maximum print width of 1890 mm (74.4 inches).</p>
        <p><strong>3. Ink System:</strong> The H2-74s utilizes mild-solvent GX inks, available in an 8-color
          configuration (Cyan, Magenta, Yellow, Black, Light Cyan, Light Magenta, Gray, Light Gray) or a 4-color
          configuration (Cyan, Magenta, Yellow, Black). Each color cartridge holds up to 1500 ml of ink.</p>
        <p><strong>4. Print Speed and Resolution:</strong> The printer can achieve a maximum print speed of 50 square
          meters per hour in 8-color mode and 100 square meters per hour in 4-color mode. It offers a maximum resolution
          of 900 dpi.</p>
        <p><strong>5. Advanced Technologies:</strong></p>
        <li>Dynamic Dot Printing (DDP) Technology: Optimizes dot size and density for each print mode, enhancing detail
          and color richness.
        </li>
        <li>Smart Nozzle Mapping (SNM): Automatically compensates for clogged nozzles to maintain print quality.</li>
        <li>Smart Pass Technology (SP): Reduces banding and graininess, particularly in halftone areas, ensuring smooth
          images and high-quality output.
        </li>
      </>
    ),
    image: {
      webp: '/equipment/webp/equipment-7.webp',
      png: '/equipment/png/equipment-7.png',
    },
  },
  {
    title: 'CNC Machine',
    description: 'A CNC machine is a sophisticated piece of equipment used in manufacturing that operates through computer programming to automate the control of machining tools. These machines can perform tasks such as cutting, drilling, milling, and turning on materials like metal, plastic, wood, foam, and composites.',
    miniDescription: 'Automated precision machining',
    moreInfo: () => (
      <>
        <p>A CNC (Computer Numerical Control) machine is a sophisticated piece of equipment used in manufacturing that
          operates through computer programming to automate the control of machining tools. These machines can perform a
          wide variety of tasks such as cutting, drilling, milling, and turning on materials like metal, plastic, wood,
          foam, and composites.</p><br/><br/>

        <p><strong>1. Software:</strong> CNC machining begins with a CAD (Computer-Aided Design) model, which is
          converted to a CNC program using CAM (Computer-Aided Manufacturing) software. This program contains the
          instructions (G-code) for the machine to follow.</p>
        <p><strong>2. Machining Process:</strong> Once the program is loaded, the CNC machine follows the coded
          instructions to move and control the tools, cutting and shaping the material to precise specifications.</p>
        <p><strong>3. Types of Machines:</strong></p>
        <li>CNC Mills: Use rotating cutting tools to remove material from a stationary workpiece.</li>
        <li>CNC Lathes: Rotate the workpiece against a stationary cutting tool, ideal for producing symmetrical parts.
        </li>
        <li>CNC Routers: Similar to mills but used primarily for cutting softer materials like wood.</li>
        <li>Water Jet Cutters: Use high-pressure water, sometimes mixed with abrasives, to cut tough materials without
          heat.
        </li>
        <li>EDM Machines: Use electrical discharges to cut and shape materials, often used for hard metals.</li>
        <li>CNC Drilling Machines: Specialize in creating precise holes in materials.</li>
      </>
    ),
    image: {
      webp: '/equipment/webp/equipment-8.webp',
      png: '/equipment/png/equipment-8.png',
    },
  },
];

export const homeAnimations = {
  titleMotion: {
    animate: {x: 0, opacity: 1, transition: {delay: HOME_DELAY_BEFORE_ANIMATION + 0.05}},
    initial: {x: -200, opacity: 0},
    exit: {x: 100, opacity: 0},
    transition: {duration: HOME_TRANSITION_ANIMATION}
  },
  descriptionMotion: {
    animate: {x: 0, opacity: 1, transition: {delay: HOME_DELAY_BEFORE_ANIMATION}},
    initial: {x: -200, opacity: 0},
    exit: {x: 100, opacity: 0, transition: {delay: HOME_DELAY_BEFORE_ANIMATION + 0.0001}},
    transition: {duration: HOME_TRANSITION_ANIMATION}
  },
  imageMotion: {
    animate: {x: 0, opacity: 1, transition: {delay: HOME_DELAY_BEFORE_ANIMATION}},
    initial: {x: 200, opacity: 0},
    exit: {opacity: 0},
    transition: {duration: HOME_TRANSITION_ANIMATION}
  },
};

export const equipmentAnimations = {
  titleMotion: {
    animate: {y: 0, opacity: 1, transition: {delay: EQUIPMENT_TRANSITION_ANIMATION + 0.1}},
    initial: {y: -100, opacity: 0},
    exit: {y: 100, opacity: 0, transition: {delay: EQUIPMENT_TRANSITION_ANIMATION + 0.0001}},
    transition: {duration: HOME_TRANSITION_ANIMATION}
  },
  descriptionMotion: {
    animate: {y: 0, opacity: 1, transition: {delay: EQUIPMENT_TRANSITION_ANIMATION}},
    initial: {y: -200, opacity: 0},
    exit: {y: 100, opacity: 0},
    transition: {duration: HOME_TRANSITION_ANIMATION}
  },
  imageMotion: {
    animate: {x: 0, opacity: 1, transition: {delay: EQUIPMENT_TRANSITION_ANIMATION}},
    initial: {x: 200, opacity: 0},
    exit: {x: 200, opacity: 0},
    transition: {duration: EQUIPMENT_TRANSITION_ANIMATION}
  },
};
