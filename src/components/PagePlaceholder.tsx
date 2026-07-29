import Button from "./Button";

/** Temporary shell for routes not yet rebuilt. */
export default function PagePlaceholder({ title }: { title: string }) {
  return (
    <section className="bg-white pt-44 pb-32">
      <div className="container-base text-center">
        <h1 className="font-display text-4xl font-light tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base text-grey">
          This page hasn&apos;t been rebuilt yet.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" variant="outline">
            Back to home
          </Button>
        </div>
      </div>
    </section>
  );
}
