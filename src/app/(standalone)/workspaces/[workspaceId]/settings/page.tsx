import { getCurrent } from "@/features/auth/actions";
import { getWorkspace } from "@/features/workspaces/actions";
import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";
import { redirect } from "next/navigation";

type WorkspaceIdSettingsPageProps = {
  params: Promise<{ workspaceId: string }>;
};

const WorkspaceIdSettingsPage = async ({
  params,
}: WorkspaceIdSettingsPageProps) => {
  const user = await getCurrent();
  if (!user) {
    redirect("/sign-in");
  }
  const { workspaceId } = await params;

  const initialValues = await getWorkspace({ workspaceId });
  if (!initialValues) {
    redirect(`/workspaces/${workspaceId}`);
  }
  return (
    <div className="w-full lg:max-w-xl">
      <EditWorkspaceForm initialValues={initialValues} />
    </div>
  );
};

export default WorkspaceIdSettingsPage;
