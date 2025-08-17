-- Fix the function search path security issue
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER 
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, university, branch, academic_year)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data ->> 'full_name', ''),
    COALESCE(NEW.raw_user_meta_data ->> 'university', ''),
    COALESCE(NEW.raw_user_meta_data ->> 'branch', ''),
    COALESCE(NEW.raw_user_meta_data ->> 'academic_year', '')
  );
  RETURN NEW;
END;
$$;