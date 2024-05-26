import LinkPlaceholder from "./LinkPlaceholder";

export default function PreviewColumn() {
  return (
    <article className="rounded-lg flex-1 mr-6 preview-background">
      <section className="flex flex-col items-center mt-[165px]">
        <section>
          <div className="w-[96px] h-[96px] bg-preview rounded-full"></div>
        </section>
        <section className="mt-6">
          <div className="w-[160px] h-4  bg-preview rounded-md"></div>
        </section>
        <section className="mt-3">
          <div className="w-[72px] h-2  bg-preview rounded-md"></div>
        </section>
        <section className="w-[237px] mt-[56px]">
          <LinkPlaceholder />
          <LinkPlaceholder />
          <LinkPlaceholder />
          <LinkPlaceholder />
          <LinkPlaceholder />
        </section>
      </section>
    </article>
  );
}
