import { useMemo, useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CourseStatus = "open" | "coming-soon";

interface Course {
  id: string;
  title: string;
  status: CourseStatus;
}

const courses: Course[] = [
  { id: "basic-software-dev", title: "Basic Computer Software Development Course", status: "open" },
  { id: "advanced-software-dev", title: "Advanced Computer Software Development Course", status: "coming-soon" },
  { id: "specialist-software-dev", title: "Specialist Computer Software Development Course", status: "coming-soon" },
  { id: "basic-hardware-eng", title: "Basic Computer Hardware Engineering Course", status: "open" },
  { id: "advanced-hardware-eng", title: "Advanced Computer Hardware Engineering Course", status: "coming-soon" },
  { id: "specialist-hardware-eng", title: "Specialist Computer Hardware Engineering Course", status: "coming-soon" },
  { id: "basic-ai", title: "Basic Artificial Intelligence (AI) Course", status: "open" },
  { id: "advanced-ai", title: "Advanced Artificial Intelligence (AI) Course", status: "coming-soon" },
  { id: "specialist-ai", title: "Specialist Artificial Intelligence (AI) Course", status: "coming-soon" },
  { id: "basic-entrepreneurship", title: "Basic Entrepreneurship Development Course", status: "open" },
  { id: "advanced-entrepreneurship", title: "Advanced Entrepreneurship Development Course", status: "coming-soon" },
  { id: "specialist-entrepreneurship", title: "Specialist Entrepreneurship Development Course", status: "coming-soon" },
  { id: "basic-catering", title: "Basic Catering and Hotel Management Course", status: "open" },
  { id: "advanced-catering", title: "Advanced Catering and Hotel Management Course", status: "coming-soon" },
  { id: "specialist-catering", title: "Specialist Catering and Hotel Management Course", status: "coming-soon" },
  { id: "basic-security", title: "Basic Security Management ,Intelligence and Technology Course", status: "open" },
  { id: "advanced-security", title: "Advanced Security Management ,Intelligence and Technology Course", status: "coming-soon" },
  { id: "specialist-security", title: "Specialist Security Management , Intelligence and Technology Course", status: "coming-soon" },
  { id: "basic-motion", title: "Basic Motion ,Vision and Sound Appliances Course", status: "open" },
  { id: "advanced-motion", title: "Advanced Motion,Vision and Sound Appliances Course", status: "coming-soon" },
  { id: "specialist-motion", title: "Specialist Motion , Vision and Sound Appliances Course", status: "coming-soon" },
];

const registrationEmail = "admissions@zbmuabuja.edu.ng";

const OnlineCourses = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<string>("");

  const selectedCourse = useMemo(
    () => courses.find((course) => course.id === selectedCourseId),
    [selectedCourseId],
  );

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-hero py-12 text-primary-foreground sm:py-20">
        <div className="container max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Online Certificate Courses</p>
          <h1 className="mt-3 font-serif text-2xl leading-tight sm:text-4xl md:text-5xl">Choose Your Course Path</h1>
          <p className="mt-4 text-sm text-primary-foreground/80 sm:mt-5 sm:text-base">
            Select any online certificate course below. You will either proceed directly to registration or
            see the upcoming availability status.
          </p>
        </div>
      </section>

      <section className="container py-10 sm:py-16">
        <Card className="mx-auto max-w-4xl border-accent/30 shadow-card">
          <CardHeader className="px-4 pb-4 pt-5 sm:px-6 sm:pt-6">
            <CardTitle className="font-serif text-xl text-primary sm:text-2xl">Available Certificate Courses</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 px-4 pb-5 sm:space-y-6 sm:px-6 sm:pb-6">
            <Select value={selectedCourseId} onValueChange={setSelectedCourseId}>
              <SelectTrigger className="h-12 w-full text-left">
                <SelectValue placeholder="Select a course" />
              </SelectTrigger>
              <SelectContent>
                {courses.map((course) => (
                  <SelectItem key={course.id} value={course.id}>
                    {course.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {selectedCourse && (
              <div className="rounded-lg border border-border bg-secondary/40 p-4 sm:p-5">
                <p className="text-sm text-muted-foreground">Selected course</p>
                <h2 className="mt-1 text-base font-semibold text-primary sm:text-lg">{selectedCourse.title}</h2>

                {selectedCourse.status === "open" ? (
                  <div className="mt-4 space-y-3">
                    <p className="text-sm text-foreground">Registration is open for this course.</p>
                    <Button asChild className="w-full sm:w-auto">
                      <a
                        href={`mailto:${registrationEmail}?subject=${encodeURIComponent(`Course Registration: ${selectedCourse.title}`)}`}
                      >
                        Proceed to Registration
                      </a>
                    </Button>
                  </div>
                ) : (
                  <div className="mt-4">
                    <p className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-sm font-medium text-accent">
                      Coming Soon
                    </p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default OnlineCourses;
