import { useEffect, useState } from "react";
import { contentWidth, EmptySection } from "./HomePage";
import ContactItem from "./ui/ContactItem";
import dataContact from "@/data/dataContact.json";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card-ui";
import { RiVerifiedBadgeFill } from "react-icons/ri";

interface RadixHoverCardProps {
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  followCursor?: boolean | "x" | "y";
  id: string;
}

interface GithubResponse {
  repoCount: number;
  joinedYears: number;
  totalContributions: number;
}

export default function Contact({
  side,
  sideOffset,
  align,
  alignOffset,
  followCursor,
  id,
}: RadixHoverCardProps) {
  const [statsGithub, setStatsGithub] = useState<GithubResponse | null>(null);

  useEffect(() => {
    fetch("/api/githubStats/wira-ananda")
      .then((res) => res.json())
      .then((data) => setStatsGithub(data))
      .catch(console.error);
  }, []);

  const joinedYears = statsGithub?.joinedYears;
  const totalContributions = statsGithub?.totalContributions;

  return (
    <section id={id}>
      <div
        className={`${contentWidth} mx-auto border-x text-sm grid grid-cols-1 md:grid-cols-2 gap-4`}
      >
        {dataContact.map((contact) => (
          <HoverCard key={contact.id} followCursor>
            <HoverCardTrigger asChild>
              <div aria-label="Kontak Wira Ananda" role="button">
                <ContactItem
                  imageSrc={contact.imageSrc}
                  imageAlt={contact.imageAlt}
                  title={contact.title}
                  subtitle={
                    contact.id === "github"
                      ? `50+ repositories`
                      : contact.subtitle[0]
                  }
                  className={contact.className}
                  link={contact.link}
                />
              </div>
            </HoverCardTrigger>
            <HoverCardContent
              side={side}
              sideOffset={sideOffset}
              align={align}
              alignOffset={alignOffset}
              className={`w-80`}
              aria-live="polite" // Konten dinamis yang muncul setelah hover
            >
              <div className="flex flex-col gap-4">
                <img
                  className="size-16 rounded-full overflow-hidden border"
                  src={
                    contact.id === "email"
                      ? "/img/wira-foto-profil2.jpg"
                      : "/img/wira-foto-profil.jpg"
                  }
                  alt={contact.imageAlt} // Alt text yang sudah sesuai pada gambar
                />
                <div className="flex flex-col gap-4">
                  <div>
                    <div className="font-bold flex items-center gap-1.5">
                      Wira Ananda{" "}
                      <RiVerifiedBadgeFill
                        size={14}
                        className="text-blue-400 cursor-pointer md:block hidden"
                        aria-label="Tanda verifikasi" // Deskripsi untuk ikon verifikasi
                      />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {contact.title}
                    </div>
                  </div>
                  <div className="text-sm ">{contact.caption}</div>
                  <div className="flex gap-4">
                    <div className="flex gap-1 text-sm items-center">
                      {contact.id === "github"
                        ? `${totalContributions != null ? totalContributions : "600+"} contributions`
                        : contact.subtitle[0]}
                    </div>
                    <div className="flex gap-1 text-sm items-center">
                      {contact.id === "github"
                        ? `${joinedYears != null ? joinedYears : "3"} years on Github`
                        : contact.subtitle[1]}
                    </div>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
      <EmptySection />
    </section>
  );
}
