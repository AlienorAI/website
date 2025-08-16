import { AnimatedNumber } from "@/components/animated-number";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { GradientBackground } from "@/components/gradient";
import { Navbar } from "@/components/navbar";
import { Heading, Lead, Subheading } from "@/components/text";
import type { Metadata } from "next";
import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";
import { Link } from "@/components/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: "Entreprise",
  description:
    "Nous avons pour mission de transformer la gestion des connaissances en entreprise grâce à une IA sécurisée et hébergée en France.",
};

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">La connaissance au service de la croissance.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Nous avons pour mission de transformer la performance des organisations
        en valorisant leur savoir interne, en priorisant la sécurité et la
        souveraineté.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">Notre mission</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            Chez Aliénor, notre mission est de proposer une solution française
            ultra-performante, conçue pour un objectif unique : offrir un accès
            rapide et intelligent à toute l’information interne d’une
            entreprise. Documents, comptes rendus, bases de données, échanges…
            Aliénor retrouve, comprend et met en contexte chaque élément utile
            pour faire gagner un temps précieux aux équipes et accélérer les
            décisions.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Pensée et hébergée en France, Aliénor garantit le respect total de
            la vie privée et la souveraineté des données. Nous allions
            performance technologique et exigences de confidentialité pour
            offrir aux entreprises un outil de recherche interne fiable,
            sécurisé et conforme aux plus hauts standards. Notre ambition :
            faire de la connaissance un atout compétitif, sans jamais
            compromettre la confiance.
          </p>
          <div className="mt-6">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-sm/6 font-medium text-blue-500"
            >
              Voir les tarifs
              <ArrowLongRightIcon className="size-5" />
            </Link>
          </div>
        </div>

        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/1.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/2.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt=""
                src="/company/3.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt=""
                src="/company/4.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          {/*<Subheading>Les chiffres</Subheading>*/}
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">
                Temps de recherche moyen
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={3} />s
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Documents indexés</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={1} />
                M+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">
                Données hébergées en France
              </dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={100} />%
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Temps moyen économisé</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={0} end={60} />%
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  );
}

function Person({
  name,
  description,
  img,
}: {
  name: string;
  description: string;
  img: string;
}) {
  return (
    <li className="flex items-center gap-4">
      <img alt="" src={img} className="size-12 rounded-full object-cover" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  );
}

function Team() {
  return (
    <Container className="mt-32">
      {/*<Subheading>Meet the team</Subheading>*/}
      <Heading as="h3" className="mt-2">
        Fondée par une équipe experte.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Lancée par une équipe reconnue dans son domaine et soutenue par des
        investisseurs de renom.
      </Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm/6 text-gray-600">
            Aliénor est née de la rencontre entre des spécialistes de
            l’intelligence artificielle, de la gestion documentaire et de la
            sécurité des données. Après avoir travaillé pendant des années au
            contact d’entreprises confrontées aux mêmes défis, perte de temps à
            chercher l’information, dispersion des connaissances, risques liés à
            la confidentialité, l’équipe a décidé de créer une solution unique :
            un moteur de recherche interne intelligent, souverain et sécurisé.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Aujourd’hui, Aliénor met la puissance de l’IA au service des
            organisations, en centralisant et en rendant exploitable l’ensemble
            de leur savoir interne. Conçue et hébergée en France, notre
            plateforme allie performance, rapidité et respect absolu de la vie
            privée. Notre ambition : permettre aux entreprises de retrouver et
            exploiter leur information en un instant, tout en gardant un
            contrôle total sur leurs données.
          </p>
          <div className="mt-6">
            <Button className="w-full sm:w-auto" href="/company#careers">
              <ArrowDownCircleIcon />
              Nous rejoindre
            </Button>
          </div>
        </div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt=""
              src="/company/5.jpg"
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
      {/*<Subheading as="h3" className="mt-24">*/}
      {/*  The team*/}
      {/*</Subheading>*/}
      <hr className="mt-24 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        <Person
          name="Enzo Bacqueyrisses"
          description="Fondateur / Directeur produit"
          img="/team/enzo.webp"
        />
        <Person
          name="Alexandre Macé"
          description="Directeur technique"
          img="/team/alex.webp"
        />
        <Person
          name="Hugo Boiteau"
          description="Directeur marketing"
          img="/team/hugo.webp"
        />
        <Person
          name="Louis Courtin"
          description="Directeur commercial"
          img="/team/louis.webp"
        />
      </ul>
    </Container>
  );
}

function Investors() {
  return (
    <Container className="mt-32">
      <Subheading>Investors</Subheading>
      <Heading as="h3" className="mt-2">
        Funded by industry-leaders.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We are fortunate to be backed by the best investors in the industry —
        both literal and metaphorical partners in crime.
      </Lead>
      <Subheading as="h3" className="mt-24">
        Venture Capital
      </Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        <li>
          <img
            alt="Remington Schwartz"
            src="/investors/remington-schwartz.svg"
            className="h-14"
          />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Remington Schwartz has been a driving force in the tech industry,
            backing bold entrepreneurs who explore grey areas in financial and
            privacy law. Their deep industry expertise and extensive political
            lobbying provide their portfolio companies with favorable regulation
            and direct access to lawmakers.
          </p>
        </li>
        <li>
          <img alt="Deccel" src="/investors/deccel.svg" className="h-14" />
          <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
            Deccel has been at the forefront of innovation, investing in
            pioneering companies across various sectors, including technology,
            consumer goods, and healthcare. Their philosophy of ‘plausible
            deniability’ and dedication to looking the other way have helped
            produce some of the world’s most controversial companies.
          </p>
        </li>
      </ul>
    </Container>
  );
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-2xl sm:aspect-5/4 lg:aspect-3/4">
      <img
        alt=""
        src="/company/2.jpg"
        className="absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-linear-to-t from-black from-10% to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
            Notre objectif est de développer une vision long terme pour l’IA
            souveraine.
          </p>
        </blockquote>
      </figure>
    </div>
  );
}

function Careers() {
  function ApplyButton({ jobTitle }: { jobTitle: string }) {
    const subject = encodeURIComponent(
      `Candidature – ${jobTitle} chez Aliénor`,
    );
    const body = encodeURIComponent(
      `Bonjour,

Je souhaite postuler au poste de ${jobTitle}.

Nom :
Ville :
Profil / Stack :
Lien GitHub / Portfolio :
Lien Twitter / X :
Lien Linkedin :
CV en pièce jointe :

Merci,
`,
    );

    return (
      <Button
        href={`mailto:contact@alienor.ai?subject=${subject}&body=${body}`}
        className="w-fit"
        plain
      >
        Postuler
      </Button>
    );
  }

  return (
    <Container id={"careers"} className="my-32">
      {/*<Subheading>Careers</Subheading>*/}
      <Heading as="h3" className="mt-2">
        Des talents au service de l’IA française.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Rejoignez notre équipe. Nous unissons des spécialistes engagés pour
        bâtir une IA performante et sécurisée.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          {/*<Subheading as="h3">Open positions</Subheading>*/}
          <div>
            <table className="w-full text-left">
              <colgroup>
                <col className="w-2/3" />
                <col className="w-0" />
                <col className="w-1/3" />
              </colgroup>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Titre</th>
                  <th scope="col">Lieu</th>
                  <th scope="col">En savoir plus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-10 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Ingénierie
                    </div>
                  </th>
                </tr>
                <tr className="border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Développeur Backend | Node.js</td>
                  <td className="px-0 py-4 text-nowrap text-gray-600">
                    À distance
                  </td>
                  <td className="w-fit px-0 py-4 text-right">
                    <ApplyButton jobTitle={"Développeur Backend | Node.js"} />
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-5 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Design
                    </div>
                  </th>
                </tr>

                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Lead Designer</td>
                  <td className="px-0 py-4 text-gray-600">À distance</td>
                  <td className="px-0 py-4 text-right">
                    <ApplyButton jobTitle={"Lead Designer"} />
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-5 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Marketing
                    </div>
                  </th>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Responsable SEO/SEA</td>
                  <td className="px-0 py-4 text-gray-600">À distance</td>
                  <td className="px-0 py-4 text-right">
                    <ApplyButton jobTitle={"Responsable SEO/SEA"} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Testimonial />
      </div>
    </Container>
  );
}

export default function Company() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <Team />
      {/*<Investors />*/}
      <Careers />
      <Footer />
    </main>
  );
}
