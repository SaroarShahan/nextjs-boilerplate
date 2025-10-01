'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import prisma from '~/db';
import { sleep } from '~/utils';

export async function createProduct(data: ProductPayload) {
  const product = await prisma.product.create({ data });

  revalidatePath('/products', 'page');
  redirect('/products');

  return product;
}

export async function getProducts() {
  await sleep(2000);

  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
}

export async function getProduct(productId: number) {
  await sleep(2000);

  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    return product;
  } catch (error) {
    console.error('Failed to fetch product:', error);
    return null;
  }
}

export async function updateProduct(productId: number, data: ProductPayload) {
  const updatedProduct = await prisma.product.update({
    where: { id: productId },
    data,
  });

  revalidateTag('/products');
  redirect('/products');

  return updatedProduct;
}

export async function deleteProduct(productId: number) {
  await prisma.product.delete({ where: { id: productId } });

  revalidateTag('/products');
  redirect('/products');
}
