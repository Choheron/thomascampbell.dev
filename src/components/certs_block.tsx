export default function CertsBlock() {

  return (
    <div className="w-full h-fit px-10 py-2 max-w-full">
      <p className="text-3xl underline pb-2"><b>Certifications:</b></p>
      <div className="w-full mx-auto flex flex-wrap justify-around py-10">
        <a href="https://www.credly.com/badges/fd660734-8fa0-4b83-888c-fa516e14c5db/public_url" target="_blank" rel="noreferrer noopener" title="AWS Certified Solutions Architect Associate">
          <img loading="lazy" className="size-50 hover:scale-110 transition duration-200" src={`/images/certs/AWS_ASA_BADGE.png`} alt="AWS Certified Solutions Architect Associate Badge" />
        </a>
        <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=1257B5C7E9BA86D09E9B2447599DC970B33843276A2B721908E76AD0714E11B0" target="_blank" rel="noreferrer noopener" title="Oracle Cloud Infrastructure 2025 Certified Generative AI Professional">
          <img loading="lazy" className="size-50 hover:scale-110 transition duration-200" src={`/images/certs/OCI25GAIOCP.png`} alt="Oracle Cloud Infrastructure 2025 Certified Generative AI Professional" />
        </a>
        <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=14BAFD5FBDB517EB5679984B9A93A5C55A1ED008A66CC02A4FC1386759A31EB2" target="_blank" rel="noreferrer noopener" title="Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate">
          <img loading="lazy" className="size-50 hover:scale-110 transition duration-200" src={`/images/certs/AWS_ASA_BADGE.png`} alt="Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate" />
        </a>
        <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=1DC22C1B096A4FD2042A03CCF369EC9E729B222C3A1A67A6819F17F792894238" target="_blank" rel="noreferrer noopener" title="Oracle Cloud Infrastructure 2024 Foundations Associate Certification">
          <img loading="lazy" className="size-50 hover:scale-110 transition duration-200" src={`/images/certs/OCI2024FNDCFA_BADGE.png`} alt="Oracle Cloud Infrastructure 2024 Foundations Associate Certification Badge" />
        </a>
      </div>
    </div>
  )
}