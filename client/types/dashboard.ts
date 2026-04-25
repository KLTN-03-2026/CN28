import { Project } from "@/types/project";
import { UserProfile } from "@/types/user";
import { ProjectMilestone } from "@/types/project";

export type OwnerProject = Project & {
  investorsCount: number;
  netAfterFeeEstimate: number;
  currentAmount?: number | string;
  fundingProgress?: number;
  milestones?: ProjectMilestone[];
};

export type PaginationProps = {
  page: number;
  pageSize: number;
  total: number;
  onChange: (next: number) => void;
};

export type DashboardSidebarProps = {
  role: string | null | undefined;
};

export type DashboardProfileProps = {
  profile: UserProfile;
};
