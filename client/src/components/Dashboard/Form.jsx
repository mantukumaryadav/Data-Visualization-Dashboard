import { useState } from 'react';
import { Input, Button, FormControl, FormLabel, Select, Textarea } from '@chakra-ui/react';
import axios from 'axios';

const Form = ({ onClose }) => {
  const [formData, setFormData] = useState({
    end_year: '',
    intensity: '',
    sector: '',
    topic: '',
    insight: '',
    url: '',
    region: '',
    start_year: '',
    impact: '',
    added: '',
    published: '',
    country: '',
    relevance: '',
    pestle: '',
    source: '',
    title: '',
    likelihood: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/data', formData);
      console.log(response.data); // handle success
      onClose(); // close the form after successful submission
    } catch (error) {
      console.error('Error:', error); // handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type="text" name="title" value={formData.title} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Start Year</FormLabel>
        <Input type="text" name="start_year" value={formData.start_year} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>End Year</FormLabel>
        <Input type="text" name="end_year" value={formData.end_year} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Intensity</FormLabel>
        <Input type="number" name="intensity" value={formData.intensity} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Sector</FormLabel>
        <Input type="text" name="sector" value={formData.sector} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Topic</FormLabel>
        <Input type="text" name="topic" value={formData.topic} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Insight</FormLabel>
        <Input type="text" name="insight" value={formData.insight} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>URL</FormLabel>
        <Input type="text" name="url" value={formData.url} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Region</FormLabel>
        <Input type="text" name="region" value={formData.region} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Impact</FormLabel>
        <Input type="text" name="impact" value={formData.impact} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Added</FormLabel>
        <Input type="text" name="added" value={formData.added} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Published</FormLabel>
        <Input type="text" name="published" value={formData.published} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Country</FormLabel>
        <Input type="text" name="country" value={formData.country} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Relevance</FormLabel>
        <Input type="number" name="relevance" value={formData.relevance} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>PESTLE</FormLabel>
        <Input type="text" name="pestle" value={formData.pestle} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Source</FormLabel>
        <Input type="text" name="source" value={formData.source} onChange={handleChange} />
      </FormControl>
      <FormControl>
        <FormLabel>Likelihood</FormLabel>
        <Input type="number" name="likelihood" value={formData.likelihood} onChange={handleChange} />
      </FormControl>
      <Button type="submit" mt={4} px={4}>Submit</Button>
    </form>
  );
};

export default Form;
