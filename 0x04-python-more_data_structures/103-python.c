#include <stdio.h>
#include <Python.h>


/**
 * print_python_bytes - print some basic info about Python bytes objects
 * @p: python object
 * Return: nothing
 **/
void print_python_bytes(PyObject *p)
{
  char *s;
  Py_ssize_t len, i;

  printf("[.] bytes object info\n");
  if (!PyBytes_Check(p))
    printf("  [ERROR] Invalid Bytes Object\n");
  else
    {
      PyBytes_AsStringAndSize(p, &s, &len);
      printf("  size: %lu\n", len);
      printf("  trying string: %s\n", s);
      if (len > 10)
	len = 10;
      else
	len++;
      printf("  first %lu bytes: ", len);
      for (i = 0; i < len - 1; i++)
	printf("%02x ", s[i] & 0xff);
      printf("%02x\n", s[len - 1] & 0xff);
    }
}
