import { createSessionClient } from "@/lib/appwrite";

// This is not a server action
export const getCurrent = async () => {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch {
    return null;
  }
};
