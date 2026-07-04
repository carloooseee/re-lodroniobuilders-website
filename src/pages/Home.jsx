import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      

<nav className="absolute top-0 left-0 w-full z-50 bg-transparent text-on-primary">
<div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="font-headline-sm text-headline-sm tracking-tight text-on-primary cursor-pointer active:opacity-70 transition-colors duration-300">
                RE Lodronio Builders Inc.
            </div>
<div className="hidden md:flex gap-8 font-label-caps text-label-caps">
<Link className="text-on-primary border-b border-on-primary pb-1 uppercase tracking-widest cursor-pointer active:opacity-70 transition-colors duration-300" to="/">Home</Link>
<Link className="text-on-primary/70 hover:text-on-primary uppercase tracking-widest cursor-pointer active:opacity-70 transition-colors duration-300" to="/about">About Us</Link>
<Link className="text-on-primary/70 hover:text-on-primary uppercase tracking-widest cursor-pointer active:opacity-70 transition-colors duration-300" to="/contact">Contact</Link>
<Link className="text-on-primary/70 hover:text-on-primary uppercase tracking-widest cursor-pointer active:opacity-70 transition-colors duration-300" to="/">Policy</Link>
</div>

<div className="md:hidden">
<span className="material-symbols-outlined cursor-pointer">menu</span>
</div>
</div>
</nav>

<header className="relative w-full h-auto pt-32 pb-12 flex items-end justify-start overflow-hidden">

<div className="absolute inset-0 z-0 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-r after:from-black/60 after:to-transparent">
<div className="w-full h-full bg-cover bg-center object-cover" data-alt="A stunning modern architectural home at sunset. The house features large floor-to-ceiling windows illuminated warmly from within, showcasing a sleek interior. The exterior is composed of clean lines, dark wood paneling, and off-form concrete. The sky is a dramatic gradient of deep oranges and purples, reflecting off a calm, dark water feature in the foreground. High-end real estate photography style, emphasizing light, structure, and luxury." style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDMryR6Z7gke1Xjfyp_p76M3xDMBXbzKovycfNcdlHF3zJCxMxZBMo13J-R1qRSbIKPpcnNVBtLv8PgDelrpSXwEm3OjVuokqqd4JQtV0RD2CLoLa9_EMweFqxDibKyGG0KRoobAVyDz_yY8yBHBe-jBU2rfU5r1hyb_ZRPI7zmiKXESQADTW6OAyl_p7rv0HqqyfmkCEIfb9jPXuYwwP50bmdcoerzIA1Fp1lY8Twk4yS7K1XE9BY04Cy-Xh4rMsi9aRSY_wEAURM\')' }}></div>
</div>

<div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-on-primary mt-20 md:mt-0">
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg max-w-4xl leading-tight">
                Every house is built by someone, but <em class="italic">God</em> is the builder of everything
            </h1>
<p className="font-label-sm text-label-sm mt-4 opacity-80 uppercase tracking-wider">Hebrews 3:4</p>
<div className="mt-12 flex items-end justify-between border-b border-on-primary/30 pb-4">
<h2 className="font-headline-md text-headline-md italic">Residence project</h2>
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="h-1 w-12 bg-on-primary"></div>
<div className="h-1 w-12 bg-on-primary/30"></div>
<div className="h-1 w-12 bg-on-primary/30"></div>
<div className="h-1 w-12 bg-on-primary/30"></div>
</div>
<span className="font-label-caps text-label-caps ml-4">1/4</span>
</div>
</div>
</div>
</header>

<main className="bg-surface relative z-20 pb-0">

<section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8">

<div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end mb-16 border-b border-outline-variant/30 pb-4 gap-8 md:gap-0">
<Link className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 group uppercase tracking-widest" to="/">
                    Click to view all Project Interiors 
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
</Link>
<h2 className="font-display-lg-mobile md:font-headline-lg text-display-lg-mobile md:text-headline-lg text-primary text-right w-full md:w-auto">Interiors Designs</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="md:col-span-12 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
<div className="md:col-span-4 flex justify-end text-right">
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">
                            Maximizing vertical space with custom cabinetry, integrated reading nooks, and playful structural elements designed to grow with the family.
                        </p>
</div>
<div className="md:col-span-8">
<img className="w-full h-auto object-cover aspect-video bg-surface-container" data-alt="A warmly lit, modern children's bedroom interior. The room features a custom-built, multi-level wooden bed structure with integrated shelving and a cozy reading nook below. A father and son are sitting on the lower level reading a book. The color palette is natural wood, soft whites, and muted blues and greens. High-end interior design photography, emphasizing functional and playful design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF-UMupcXvPrZCx9ugPTb_64Z1lB7G2dx9IVElRqtKBzSsbqnEnOBv37pOMpstmziL_zASLBBCkkQwZ_-ArzpyNEUMmAWzO8iGmxCZHN-Xf1-ny88ntdGihk76rMaJlqJ5mwQW1DkG9zlsUMz26ndqPudtKUfm1f9M20_EzRrV4A8rO22grELAiSwIoWpAlLP_f9trRt38toTORj-ZdhuMlA72JKRrxibKcUqRXuyR8v-ac5NbVCeuLfq_PcjPYEKWou5Bo8tSgSQ" />
</div>
</div>

<div className="md:col-span-6 flex flex-col gap-6 mt-16 md:mt-0">
<img className="w-full h-auto object-cover aspect-[4/3] bg-surface-container" data-alt="A sophisticated dining room interior showcasing a study in texture. A large, dark vertical wood paneled wall serves as a dramatic backdrop. A minimalist wooden dining table with elegant, curved wooden chairs sits in the center. A sleek, linear black pendant light hangs above. Soft, flowing beige drapery frames a large window, softening the stark lines. The lighting is moody and elegant." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1OsxQ-EYKYfinK-5GoYjsXt-lbmTHvfAS0VIBlj2RwOFVHPDVcP6yGUiUqPjw1rUxP9fGSEM4gMHjJHm3QolAu15KoTDdI9EuPlGOtmCST7axlJDEfjXsCIi92l5tOehm09R2pLJl5tw_4mqd2L5yO-ksOefFWkc5D8TPjInaQyrJRL_BtO1Kzzu7o5yWt0omk975kvA8ML2pJgD2-1h-B2ordTEugwLNev5jHICQLF-5kgRplz0WYsLyk3wgrx5of3VI8JXnbEQ" />
<p className="font-body-md text-body-md text-on-surface-variant">
                         A study in texture. Vertical wood paneling creates a dramatic backdrop for an intimate dining experience, balanced by soft, flowing drapery.
                     </p>
</div>
<div className="md:col-span-6 flex flex-col gap-6 mt-16 md:mt-0">
<img className="w-full h-auto object-cover aspect-[3/4] bg-surface-container" data-alt="A cozy yet sophisticated living room corner. A large, floor-to-ceiling custom wooden bookshelf filled with books and curated objects dominates the right side. A comfortable, olive green armchair sits in the foreground with soft, neutral textured pillows. A modern black floor lamp arches over the chair. The walls are a soft, muted sage green. The atmosphere is quiet, intellectual, and inviting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFZDJAVbMvjm4cR6iU3rZXC8-0TEJ-JgGRCb9hP6xxYK2cir_UMtOpVy8a-GnDCtM8wFuZAZBPYMXz-oPkilx18ehtqgVzfMyv6z5IY5HI9_1_yFC2pYmrVHxzCZhXfBrq-chFMt4bnOGeFvkhWcv51QYnOvyoN7pODAZqXSS91mDbp09z2qekjbTA8kl15FxvtnFKy0Ghg8maje5obhn9n2UvWyF11uMsDKhjqkHxUSBG3ClKlEgS6DXA_MQG4FkjmXWiwj6PQ5g" />
<p className="font-body-md text-body-md text-on-surface-variant text-right md:text-left">
                        Floor-to-ceiling shelving meets soft, neutral textiles to create a sophisticated yet cozy corner dedicated to literature and relaxation.
                    </p>
</div>
</div>
</section>

<section className="mt-8 bg-surface-container-low pt-8 pb-8 px-margin-mobile md:px-margin-desktop" style={{ backgroundColor: 'rgb(29, 29, 29)' }}>
<div className="max-w-container-max mx-auto">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-outline-variant/30 pb-4 gap-8 md:gap-0">
<h2 className="font-display-lg-mobile md:font-headline-lg text-display-lg-mobile md:text-headline-lg text-on-primary" style={{ opacity: '0' }}>Exterior Designs</h2>
<Link className="font-label-caps text-label-caps hover:text-primary transition-colors flex items-center gap-2 group uppercase tracking-widest text-on-primary/70" to="/">
                        Click to view all Project Exteriors
                        <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
</Link>
</div>

<div className="mb-16">
<img className="w-full h-auto object-cover aspect-video md:aspect-[21/9] bg-surface-container" data-alt="A striking modern exterior of a multi-story home during daylight. The facade features bold, geometric shapes with a mix of raw, off-form concrete and warm, vertical wooden slats. Large rectangular windows puncture the concrete walls. Two luxury SUVs are parked in the open carport on the ground level. Lush green trees frame the upper portion of the house. The aesthetic is contemporary, structural, and luxurious." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq2SnkfkIIXxvMY7ZB1HkgGYUMUPyFMFy27zXj2YiajEpD9g2h6tEXRD8tttbcHXyb3pz3stbFCsVZJ44h9zCBLfK53Jg6qpZtyZidDy9GztJGPGiRoCiaj-_65HbOHJLqR_zQbEpJs9qtpcl8HwxjjjKIXdGf0zsBYpYLTUPUCVWv6bdO63P4FB2okSlbhgg92NFIGZm-Zv-08tycIoHcqxeytNpXtCA5G1jXyMw7YJ2pLUojPA_VgfRgVCtdoeronqQYrPqjaKs" />
<p className="font-body-lg text-body-lg mt-6 max-w-3xl text-on-primary/70">
                        Bold geometries. The raw texture of off-form concrete finds balance against the rhythmic warmth of vertical wooden slats.
                     </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mt-24">
<div className="flex flex-col gap-6">
<img className="w-full h-auto object-cover aspect-[4/3] bg-surface-container" data-alt="A three-story modern urban home exterior. The design is a study in contrast, featuring rich, dark textured stone on the lower levels and smooth, light plaster on the upper levels. Organic greenery cascades from built-in planters on the balconies, softening the hard architectural lines. Two cars are parked in the driveway behind a sleek metal gate. The lighting suggests early evening." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACIyEPJr_BgCbncaqhGyFfE34O49M-ZDRUDincUw5pGtIYD02Li-sXDCAUjRWFiHsrB7ULpckkNWL5EJe9Ngq27OuTnAV39aRubkxNhYzsqKor2_ix9D_kSkWmkOoBhGMYLQOTqUEaI2S0U6t6w8CoD9su9nxUEyxYiAv1CCP22np1gat04zNxSksVkRS-DlLGysOYOWsCy8xTzkKHCWJ8bbGl44s1tuiefWfu7J9MRpSgmtXm-Z_PD3f-96VmOAai05VKrl8f-Nk" />
<p className="font-body-md text-body-md text-on-primary/70">
                            A study in contrast. Rich stone textures and organic greenery layer together to create a dynamic, multi-tiered urban facade.
                        </p>
</div>
<div className="flex flex-col gap-6">
<img className="w-full h-auto object-cover aspect-[4/3] bg-surface-container" data-alt="A sleek, expansive modern home exterior featuring dramatic structural cantilevers. The house has a wide, horizontal profile with extensive use of glass, steel, and light gray stone cladding. The cantilevered rooflines provide deep overhangs, blurring the lines between indoor and outdoor living spaces. Three luxury cars are parked in the spacious driveway. The scene is bright and airy, emphasizing seamless design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSOPHgydCnsEm5Je9LACjytiH7rbfcAX__Atyq4KJ3wQbdy9Dz5jeDCpTRidQC3DCEyoQIid7RC0WbLtXRnUNt-dir5jd39Fhl49iz0J9Rez0QLQSSzUEU80CfWB6oryGlEYyHninj3jis0Dg48p_EaPeX7Ae_ompxev2RUgNE9Al3ycOQb14pa4Z2CWLsUBwxQqwzLbfNHUQwbo-ChQ5zGAlV55bUXfRqMC_Frci2-uAXWcjx1clC6Bsimwfl8tQkQ2b_x3tXG-Q" />
<p className="font-body-md text-body-md text-right md:text-left text-on-primary/70">
                            Sleek architectural lines and expansive structural cantilevers define a residence built for seamless indoor-outdoor cohesion.
                        </p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 py-8 px-margin-mobile md:px-margin-desktop w-full bottom-0" style={{ backgroundColor: 'rgb(29, 29, 29)' }}>
<div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-label-caps text-label-caps text-white/70 tracking-widest uppercase">
                © 2024 RE Lodronio Builders Inc.
            </div>
<div className="flex flex-wrap justify-center gap-4 font-body-md text-body-md">
<Link className="text-white underline transition-colors duration-300" to="/">Home</Link>
</div>
<div className="font-label-caps text-label-caps text-white/70 tracking-widest uppercase text-right">
                Building with purpose.
            </div>
</div>
</footer>



    </>
  );
}
