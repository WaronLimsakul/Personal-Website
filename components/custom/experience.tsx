import { CalendarDays, MapPin, Building2 } from "lucide-react";

export interface Experience {
  companyName: string;
  position: string;
  description: string;
  location?: string;
  startDate?: Date;
  endDate?: Date;
  skills?: string[];
}

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const calculateDuration = (startDate: Date, endDate?: Date): string => {
  const end = endDate || new Date();
  const months = Math.round(
    (end.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30),
  );

  if (months < 12) {
    return `${months} month${months !== 1 ? "s" : ""}`;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) {
    return `${years} year${years !== 1 ? "s" : ""}`;
  }

  return `${years} year${years !== 1 ? "s" : ""} ${remainingMonths} month${remainingMonths !== 1 ? "s" : ""}`;
};

// Experience section ui
// To chagne experience-related data, go to app/data/experiences.ts
const ExperienceSection: React.FC<{ experiences: Experience[] }> = ({
  experiences: propExperiences,
}) => {
  return (
    <section id="experience" className="py-20">
      <div className="container w-5/6 mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {propExperiences.map((experience, index) => (
            <div
              key={`${experience.companyName}-${index}`}
              className="border rounded-xl p-6 hover:shadow-lg transition-shadow bg-card"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                    <h3 className="text-xl font-semibold">
                      {experience.companyName}
                    </h3>
                  </div>
                  <h4 className="text-lg font-medium text-muted-foreground mb-2">
                    {experience.position}
                  </h4>
                  {experience.location && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4" />
                      {experience.location}
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-end">
                  {experience.startDate && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                      <CalendarDays className="h-4 w-4" />
                      <span>
                        {formatDate(experience.startDate)} -{" "}
                        {experience.endDate
                          ? formatDate(experience.endDate)
                          : "Present"}
                      </span>
                    </div>
                  )}
                  {experience.startDate && (
                    <span className="text-xs text-muted-foreground">
                      {calculateDuration(
                        experience.startDate,
                        experience.endDate,
                      )}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {experience.description}
              </p>

              {experience.skills && experience.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
