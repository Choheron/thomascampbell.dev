export default function CertsBlock() {
  type Certification = {
    title: string;
    img_src: string;
    link: string;
    issue_date: number;
    expire_date: number;
    importance: number;
  }

  const certObjs: Certification[] = [
    { title: "AWS Certified Solutions Architect Associate", img_src: "/images/certs/AWS_ASA_BADGE.png", link: "https://www.credly.com/badges/fd660734-8fa0-4b83-888c-fa516e14c5db/public_url", issue_date: Date.parse("2024-06-28"), expire_date: Date.parse("2027-06-28"), importance: 2 },
    { title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", img_src: "/images/certs/OCI25GAIOCP.png", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1257B5C7E9BA86D09E9B2447599DC970B33843276A2B721908E76AD0714E11B0", issue_date: Date.parse("2025-07-17"), expire_date: Date.parse("2027-07-17"), importance: 2 },
    { title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", img_src: "/images/certs/OCI25AICFA.png", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=14BAFD5FBDB517EB5679984B9A93A5C55A1ED008A66CC02A4FC1386759A31EB2", issue_date: Date.parse("2025-07-16"), expire_date: Date.parse("2027-07-16"), importance: 2 },
    { title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", img_src: "/images/certs/OCI25FNDCFA.png", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=65B90A2795BD003EAE8B7F3663B35ADB0E5395F0DFE5C2E0EC987A236A1CA842", issue_date: Date.parse("2025-07-18"), expire_date: Date.parse("2027-07-18"), importance: 1 },
    { title: "Oracle Cloud Infrastructure 2024 Foundations Associate Certification", img_src: "/images/certs/OCI2024FNDCFA_BADGE.png", link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1DC22C1B096A4FD2042A03CCF369EC9E729B222C3A1A67A6819F17F792894238", issue_date: Date.parse("2024-10-21"), expire_date: Date.parse("2026-10-21"), importance: 1 },
  ]

  function certSort(a: Certification, b: Certification) {
    if(a.importance == b.importance) {
      return b.expire_date - a.expire_date
    }
    return b.importance - a.importance
  }

  return (
    <div className="w-full h-fit px-10 py-2 max-w-full">
      <p className="text-3xl underline pb-2"><b>Certifications:</b></p>
      <div className="w-full mx-auto flex flex-wrap justify-around py-10">
        {certObjs.sort(certSort).map((obj, index) => {
          return (
            <a key={index} href={obj.link} target="_blank" rel="noreferrer noopener" title={obj.title}>
              <img loading="lazy" className="size-25 m-2 lg:size-50 hover:scale-110 transition duration-200" src={obj.img_src} alt={obj.title + " Badge"} />
            </a>
          )
        })}
      </div>
    </div>
  )
}