'use server';
/**
 * @fileOverview A Genkit flow for generating 3D rendered images of dishes.
 *
 * - generateDishImages - A function that generates a 3D rendered image of a dish.
 * - GenerateDishImageInput - The input type for the generateDishImages function.
 * - GenerateDishImageOutput - The return type for the generateDishImages function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDishImageInputSchema = z.object({
  dishDescription: z
    .string()
    .describe('A detailed description of the dish to be rendered.'),
});
export type GenerateDishImageInput = z.infer<typeof GenerateDishImageInputSchema>;

const GenerateDishImageOutputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "A data URI of the generated image, including a MIME type and Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type GenerateDishImageOutput = z.infer<typeof GenerateDishImageOutputSchema>;

const generateDishImagePrompt = ai.definePrompt({
  name: 'generateDishImagePrompt',
  input: {schema: GenerateDishImageInputSchema},
  output: {schema: GenerateDishImageOutputSchema},
  prompt: `Generate a beautiful, high-quality, 3D rendered image of the following dish, presented on a pure black background with elegant lighting:

Dish Description: {{{dishDescription}}}`,
});

const generateDishImagesFlow = ai.defineFlow(
  {
    name: 'generateDishImagesFlow',
    inputSchema: GenerateDishImageInputSchema,
    outputSchema: GenerateDishImageOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: [
        {
          text: `Generate a beautiful, high-quality, 3D rendered image of the following dish, presented on a pure black background with elegant lighting: ${input.dishDescription}`,
        },
      ],
    });

    if (!media || !media.url) {
      throw new Error('Failed to generate image or image URL is missing.');
    }

    return {imageDataUri: media.url};
  }
);

export async function generateDishImages(input: GenerateDishImageInput):
  Promise<GenerateDishImageOutput> {
  return generateDishImagesFlow(input);
}
